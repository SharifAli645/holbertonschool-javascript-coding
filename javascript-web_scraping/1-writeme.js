#!/usr/bin/node
const file = process.argv[1];
const content = process.argv[2];
const fs = require('fs');

fs.writeFile(file, content, (error) => {
  if (error) {
    console.log(error);
  }
});
