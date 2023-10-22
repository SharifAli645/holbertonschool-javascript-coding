const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;
/* eslint-disable */
const app = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
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
        res.end(error);
      });
  }
});

app.listen(port, hostname, () => {
  console.log(`Servidor escuchando en http://127.0.0.1:${port}/`);
});

module.exports = app;
