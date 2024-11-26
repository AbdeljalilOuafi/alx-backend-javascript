const http = require('http');
const fs = require('fs');

const countStudents = async (path, res) => {
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
    res.write(outputLines.join('\n'));
  } catch (e) {
    throw new Error('Cannot load the database');
  }
};

const routes = {
  '/': (req, res) => {
    res.end('Hello Holberton School!');
  },
  '/students': (req, res) => {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2], res)
      .then(() => {
        res.end();
      })
      .catch((error) => {
        res.statusCode = 404;
        res.end(error.message);
      });
  },
};

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  routes[request.url](request, response);
});
app.listen(1245, '127.0.0.1', () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
