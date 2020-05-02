const express = require('express')
const mongoose = require('mongoose')

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.set('useUnifiedTopology', true);
mongoose.connect(
  'mongodb://localhost:27017/nodeapi', 
  {useNewUrlParser: true}
);


// Primeira rota
app.get('/', (req, res) => {
  res.send('Hello Rafael')
})

app.listen(3001);