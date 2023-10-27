const express = require('express');

const app = express();
const puerto = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(puerto, () => {
  console.log(`Servidor escuchando en ${puerto}`);
});

module.exports = app;
