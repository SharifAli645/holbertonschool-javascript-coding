process.stdin.setEncoding('utf8');
console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  process.stdin.write(`Your name is: ${data}`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});