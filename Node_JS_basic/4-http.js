const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

server.listen(port, hostname, () => {
  console.log(`Servidor escuchando en http://127.0.0.1:${port}/`);
});
