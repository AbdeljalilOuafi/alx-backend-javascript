#!/usr/bin/node

import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((hashtable) => {
        res.status(200);
        let result = 'This is the list of our students\n';

        // Sorting the majors alphabetically
        const sortedKeys = Object.keys(hashtable).sort();
        const sortedHashtable = {};
        sortedKeys.forEach((key) => {
          sortedHashtable[key] = hashtable[key];
        });

        const keys = Object.keys(sortedHashtable);
        const lastIndex = keys.length - 1;

        for (let i = 0; i < keys.length; i += 1) {
          const key = keys[i];
          const isLast = i === lastIndex;

          // Add the result with or without a new line depending on whether it's the last iteration
          result += `Number of students in ${key}: ${sortedHashtable[key].length}. List: ${sortedHashtable[key].join(', ')}`;
          if (!isLast) {
            result += '\n'; // Add new line except for the last iteration
          }
        }

        res.send(result);
      })
      .catch(() => {
        res.status(500);
        res.send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    readDatabase(process.argv[2])
      .then((hashtable) => {
        if (!(major in hashtable)) {
          res.status(500);
          res.send('Major parameter must be CS or SWE');
        }
        res.send(`List: ${hashtable[major].join(', ')}`);
      })
      .catch(() => {
        res.status(500);
        res.send('Cannot load the database');
      });
  }
}

export default StudentsController;
