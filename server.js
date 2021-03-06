const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando o App
const app = express();
app.use(express.json())
//consigo passar qual dominio pode ter acesso e outras configurações de segurança
app.use(cors())

// Iniciando o DB
mongoose.set('useUnifiedTopology', true);
mongoose.connect(
  'mongodb://localhost:27017/nodeapi', 
  {useNewUrlParser: true}
);
// caso eu tenha muito models, ele pega todos os que estiverem dentro da pasta, sem precisar fazer um require para cada
requireDir('./src/models')

// ROtas
app.use('/api', require('./src/routes'))

app.listen(3001);