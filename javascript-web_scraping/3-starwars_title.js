#!/usr/bin/node
const id = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/1`;
const request = require('request');

request(url, (err, response, body) => { 
    if (!err && response.statusCode === 200) {
        console.log(JSON.parse(response.body));
    } else { 
        console.log(err)
    }
});

