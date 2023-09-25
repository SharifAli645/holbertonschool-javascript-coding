#!/usr/bin/node
const id = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/' + id + '/';
const request = require('request');

request(url, (err, response, body) => { 
    if (err) {
        console.error(error);
    }
    const resp = JSON.parse(body);
    console.log(resp.title);
});
