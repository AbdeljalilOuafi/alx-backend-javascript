#!/usr/bin/node
const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    } else {
      let currentRow = 0;
      const rawData = data.split(',');
      const rows = [[]];
      rawData.forEach((value) => {
        if (value.includes('\n')) {
          const split = value.split('\n');
          const lastItem = split[0];
          const newRowValue = split[1];
          rows[currentRow].push(lastItem);
          currentRow += 1;
          if (!Array.isArray(rows[currentRow])) {
            rows[currentRow] = [];
            rows[currentRow].push(newRowValue);
          }
        } else if (Array.isArray(rows[currentRow])) {
          rows[currentRow].push(value);
        }
      });
      // Removes the header and an empty array at the last index
      rows.shift();
      rows.pop();

      const csStudents = rows.filter((row) => row[3] === 'CS');
      const sweStudents = rows.filter((row) => row[3] === 'SWE');
      const csStudentsNames = csStudents.map((row) => row[0]);
      const sweStudentsNames = sweStudents.map((row) => row[0]);
      console.log(`Number of students: ${rows.length}`);
      console.log(`Number of students in CS: ${csStudents.length}. `
        + `List: ${csStudentsNames.join(', ')}`);
      console.log(`Number of students in SWE: ${sweStudents.length}. `
        + `List: ${sweStudentsNames.join(', ')}`);
    }
  });
}
module.exports = countStudents;
