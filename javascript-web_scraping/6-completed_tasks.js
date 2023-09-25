#!/usr/bin/node
const url = process.argv[2];
const request = require('request');

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  }
  const list = JSON.parse(body);
  const results = {};
  for (const ele of list) {
    const id = ele.userId.toString();
    if (!results[id]) {
      results[id] = 0;
    }
    if (ele.completed) {
      results[id]++;
    }
  }
  for (const k in results) {
    if (!results[k]) {
      delete results[k];
    }
  }
  console.log(results);
});
