"USE STRICT"

function fizzbuzz(x) {

    //Change the f and b value to any number you want to be your "Fizz" or "Buzz". (IE, If you set f = 10 and b = 17, when counted to the number 20, the output will be "Fizz")
    let f = 3;
    let b = 5;

    //Error Checker: Are all variables numbers?
    if (x === undefined) {
        throw new SyntaxError("Please call the function using fizzbuzz(x) where x is a number equal to or greater than 1.")
    }
    if(f === undefined || b === undefined) {
        throw new SyntaxError("f and b are undefined. Please make sure f and b are both numbers equal to or greater than 1.")
    }
    if (typeof f !== 'number' || typeof b !== 'number' || typeof x !== 'number') {
        throw new TypeError("One of more variables is not a number. Please make sure f, b, and x are numbers equal to or greater than 1.")
    }

    //Rounds all variables down to the nearest whole number
    f = Math.floor(f);
    b = Math.floor(b);
    x = Math.floor(x);

    //Error Checker: Are all numbers greater than or equal to 1?
    if (x < 1 || f < 1 || b < 1) {
        throw new RangeError("One or more variables is less than 1. Please make sure f, b, and x are numbers equal to or greater than 1.")
    }

    //FizzBuzz processor
    for (let i = 1; i <= x; i++) {
        let out = "";
        if (i % f == 0) {
            out += "Fizz";
        }
        if (i % b == 0) {
            out += "Buzz";
        }
        if (out === "") {
            out = i;
        }
        console.log(out)
    }

}

fizzbuzz(15);