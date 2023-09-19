#!/usr/bin/node
const file = process.argv[1];
const fss = require('fs');
fss.readFile(file, 'utf-8', (error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(data);
});
