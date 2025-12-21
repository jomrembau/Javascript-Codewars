var output = [];
var var_output = 1;

function fizzBuzz() {
    let next = var_output; 

    if (next % 3 === 0 && next % 5 === 0) {
        output.push("FizzBuzz");
    } else if (next % 3 === 0) {
        output.push("Fizz");
    } else if (next % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(next);
    }

    console.log(output);
    var_output++;
}