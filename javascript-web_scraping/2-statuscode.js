#!/usr/bin/node
const url = process.argv[2];
const request = require('request');

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(`code: ${response.statusCode}`);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});
