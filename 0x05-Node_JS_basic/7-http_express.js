const express = require('express');
const fs = require('fs');

const app = express();

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

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  countStudents(process.argv[2])
    .then((data) => {
      response.send(`This is the list of our students\n${data}`);
    })
    .catch(() => {
      response
        .status(404)
        .send('This is the list of our students\nCannot load the database');
    });
});

app.listen(1245, () => {
  console.log('Example app listening on port 1245');
});

module.exports = app;
