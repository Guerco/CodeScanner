// Undefined variable
console.log(x); // x is not defined

// Unused variable
var y = 20;

// Unused parameter
function greet(name) {
    console.log("Hello!");
}

// Syntax error
var z = 30
console.log(z); // Missing semicolon at the end of the statement

// Type error
var a = null;
console.log(a.toUpperCase()); // Cannot read property 'toUpperCase' of null

// Duplicated code
function add(x, y) {
    return x + y;
}

function sum(a, b) {
    return a + b;
}
