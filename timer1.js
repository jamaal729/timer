let inputs = process.argv;
inputs = inputs.slice(2, inputs.length);
console.log(inputs);
for (let i = 0; i < inputs.length; i++) {
  if (!isNaN(inputs[i])) {
    if (inputs[i] > 0) {
      setTimeout(() => {
        process.stdout.write(i + " beep \n");
        process.stdout.write('\x07');
      }, inputs[i] * 1000);
    }
  }
}
