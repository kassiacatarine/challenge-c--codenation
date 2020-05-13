const express = require('express');
const path = require('path');
const app = express();

const cesarCipherRouter = require('./src/routes/cesar-cipher');

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'src/public')));

app.use('/', cesarCipherRouter);

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!');
});