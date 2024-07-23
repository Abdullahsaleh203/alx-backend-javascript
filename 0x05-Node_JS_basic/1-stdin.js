process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// console.log('Welcome to Holberton School, what is your name?');

// rl.on('line', (input) => {
//   if (name.toLowerCase() === 'exit') {
//     console.log('This important sofware is now closing');
//     rl.close();
//   } else {
//     console.log('Your name is: ${name}');
//   }
// });

// rl.on('close', () => {
//   console.log('This important software is now closing');
// });
