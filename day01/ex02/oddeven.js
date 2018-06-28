var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

process.stdout.write("Enter a number: ");

rl.on('line', function(line) {
    if (isNaN(line)) {
        console.log(`\'${line}\' is not number`);
    }
    else if (line % 2 == 0) {
        console.log("The number", line, "is even");
    }
    else if ((readline)) {
        console.log("The number", line, "is Odd");
    }
    process.stdout.write("Enter a number: ");
})
