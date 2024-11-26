#!/usr/bin/node

const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const countStudents = async (path) => {
  try {
    const csvData = await fs.readFileSync(path, 'utf8');
    const outputLines = [];
    const lines = csvData.split('\n');
    const rows = lines.filter((item) => item.trim() !== '');
    outputLines.push(`Number of students: ${rows.length - 1}`);
    const data = [];
    const head = [...rows[0].split(',')];
    rows.splice(0, 1);
    for (let i = 0; i < rows.length; i += 1) {
      const student = {};
      let j = 0;
      head.forEach((item) => {
        student[item] = rows[i].split(',')[j];
        j += 1;
      });
      data.push(student);
    }
    const countField = {};
    data.forEach((item) => {
      if (item.field in countField) {
        countField[item.field] += 1;
      } else {
        countField[item.field] = 1;
      }
    });
    Object.keys(countField).forEach((key) => {
      let names = 'List: ';
      names += data
        .filter((item) => item.field === key)
        .map((item) => item.firstname)
        .join(', ');
      outputLines.push(
        `Number of students in ${key}: ${countField[key]}. ${names}`,
      );
    });
    return outputLines.join('\n');
  } catch (e) {
    throw new Error('Cannot load the database');
  }
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((err) => {
      res.status(404);
      res.send(err.message);
    });
});

app.listen(port, () => {
  console.log('Server is running on http://localhost:1245');
});

module.exports = app;
