#!/usr/bin/node
const fs = require('fs');

const countStudents = async (path) => {
  try {
    const csvData = await fs.readFileSync(path, 'utf8');
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
