process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');

process.stdin.on('data', (key) => {

  console.log(key);
  if (key === 'b') {
    process.stdout.write(`beep!\n`);
  }

  else if (Number.isInteger(parseInt(key)) && (key >= 1) && (key <= 9)) {
    process.stdout.write(`setting timer for ${key} seconds... `);
    setTimeout(() => {
      process.stdout.write(` beep!\n`);
      process.stdout.write('\x07');
    }, key * 1000);
  }

  else if (key === '\u0003') {
    process.stdout.write(`Thanks for using me, ciao!\n`);
    process.exit();
  }
});
