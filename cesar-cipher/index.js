const express = require('express');
const path = require('path');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'hbs');

// const router = express.Router();

// app.get('/', function(req, res) {
//   res.send('Olá Mundo!');
// });
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!');
});