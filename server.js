const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.set('useUnifiedTopology', true);
mongoose.connect(
  'mongodb://localhost:27017/nodeapi', 
  {useNewUrlParser: true}
);
// caso eu tenha muito models, ele pega todos os que estiverem dentro da pasta, sem precisar fazer um require para cada
requireDir('./src/models')

const Product = mongoose.model('Product')



// Primeira rota-
app.get('/', (req, res) => {
  Product.create({ 
    title: 'React Native',
    description: 'Build native apps with React',
    url: 'http://github.com/facebook/react-native'
  })

  return res.send('Hello Rafael')
})

app.listen(3001);