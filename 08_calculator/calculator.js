const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (arr) => arr.reduce((a, b) => a + b, 0);

const multiply = (arr) => arr.reduce((a, b) => a * b, 1);

const power = function(a, b) {
  let result = a;
  while (b > 1) {
    result *= a;
    b--;
  }
  return result;
}

const factorial = function(a) {
	let result = 1;
  while (a > 1) {
    result *= a;
    a--;
  }
  return result;
};

factorial(10);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
