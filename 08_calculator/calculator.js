const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numberArray) {
  let result = 0;
  for (let i = 0; i < numberArray.length; i++) {
    result += numberArray[i];
  }
  return result;
};

const multiply = function (numberArray) {
  let result = 1;
  for (let i = 0; i < numberArray.length; i++) {
    result *= numberArray[i];
  }
  return result;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let result = 1;
  for (let i = a; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
