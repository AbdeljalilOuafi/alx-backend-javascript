process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data.toString()}`);
  process.stdin.pause(); // Stops further input in interactive mode
});

const closeProgram = () => {
  process.stdout.write('This important software is now closing\n');
};

if (process.stdin.isTTY) {
  process.stdin.on('pause', closeProgram); // Interactive mode
} else {
  process.stdin.on('end', closeProgram); // Non-interactive mode
}
