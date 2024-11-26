#!/usr/bin/node

console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (data) => {
  console.log(`Your name is: ${data.toString()}`);
  process.stdin.pause();
});

process.stdin.on('pause', () => {
  console.log('This important software is now closing');
});
