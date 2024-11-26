#!/usr/bin/node

const http = require('http');

const port = 1245;
const app = http.createServer((req, res) => {
  res.write('Hello Holberton School!');
  res.end();
});

app.listen(port);
module.exports = app
