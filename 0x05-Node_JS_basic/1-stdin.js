process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data.toString()}`);
  if (process.stdin.isTTY) {
    process.stdin.pause();
  }
});

if (process.stdin.isTTY === undefined) {
  process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
});
} else {
  if (process.stdin.on('pause', () => {
    process.stdout.write('This important software is now closing\n');
  }));
};
