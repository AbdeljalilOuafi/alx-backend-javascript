#!/usr/bin/node
// const fs = require('fs');

// function countStudents(path) {
//   fs.readFile(path, 'utf-8', (err, data) => {
//     if (err) {
//       throw new Error('Cannot load the database');
//     } else {
//       let currentRow = 0;
//       const rawData = data.split(',');
//       const rows = [[]];
//       rawData.forEach((value) => {
//         if (value.includes('\n')) {
//           const split = value.split('\n');
//           const lastItem = split[0];
//           const newRowValue = split[1];
//           rows[currentRow].push(lastItem);
//           currentRow += 1;
//           if (!Array.isArray(rows[currentRow])) {
//             rows[currentRow] = [];
//             rows[currentRow].push(newRowValue);
//           }
//         } else if (Array.isArray(rows[currentRow])) {
//           rows[currentRow].push(value);
//         }
//       });
//       // Removes the header and an empty array at the last index
//       rows.shift();
//       rows.pop();

//       const csStudents = rows.filter((row) => row[3] === 'CS');
//       const sweStudents = rows.filter((row) => row[3] === 'SWE');
//       const csStudentsNames = csStudents.map((row) => row[0]);
//       const sweStudentsNames = sweStudents.map((row) => row[0]);
//       console.log(`Number of students: ${rows.length}`);
//       console.log(`Number of students in CS: ${csStudents.length}. `
//         + `List: ${csStudentsNames.join(', ')}`);
//       console.log(`Number of students in SWE: ${sweStudents.length}. `
//         + `List: ${sweStudentsNames.join(', ')}`);
//     }
//   });
// }
// module.exports = countStudents;


const fs = require('fs');

const countStudents = (path) => {
  try {
    const csvData = fs.readFileSync(path, 'utf8');
    const lines = csvData.split('\n');
    const rows = lines.filter((item) => item.trim() !== '');
    console.log(`Number of students: ${rows.length - 1}`);
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
      console.log(`Number of students in ${key}: ${countField[key]}. ${names}`);
    });
  } catch (e) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
