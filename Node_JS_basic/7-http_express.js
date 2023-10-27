const express = require('express');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
/* eslint-disable */
app.get('/students', (req, res) => {
  if (fs.existsSync(process.argv[2])) {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((mapeo) => {
        const len = mapeo.length;
        const lista = [];

        res.write(`Number of students: ${len}\n`);

        for (const ele of mapeo) {
          if (lista.includes(ele[3])) {
            continue;
          } else lista.push(ele[3]);
        }
        for (const ele of lista) {
          const personaje = mapeo.filter((name) => name[3] === ele);
          const cadena = personaje.map((per) => ` ${per[0]}`);

          res.write(
             `Number of students in ${ele}: ${personaje.length}. List:${cadena}\n`
          );
        }
        res.end();
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.send('This is the list of our students\nCannot load the database');
  }
});

app.listen(port, () => {
  console.log(`My app is listening on port ${port}`);
});

module.exports = app;
