#!/usr/bin/node
const request = require('request');
const argv = process.argv;
const fs = require('fs');
const url = argv[2];
const file = argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    fs.writeFile(file, body, function (error) {
      if (error) {
        console.error(error);
      }
    });
  }
});
