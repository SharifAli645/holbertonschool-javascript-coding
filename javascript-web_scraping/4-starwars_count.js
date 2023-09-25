#!/usr/bin/node
const request = require('request');
const api = process.argv[2];

request(api, (error, response, body) => {
  if (error) {
    console.error(error);
  }
  const resp = JSON.parse(body);
  let cnt = 0;
  let idx = 0;
  while (resp.results[idx]) {
    resp.results[idx].characters.forEach((value) => {
      if (value.endsWith('/18/')) {
        cnt++;
      }
    });
    idx++;
  }
  console.log(cnt);
});
