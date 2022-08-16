const sumAll = function (a, b) {
  // Check for bad input first
  if (a < 0 || b < 0) {
    return "ERROR";
  }
  if (typeof a != "number" || typeof b != "number") {
    return "ERROR";
  }

  let smallNumber = 0;
  let bigNumber = 0;

  if (a < b) {
    smallNumber = a;
    bigNumber = b;
  } else {
    smallNumber = b;
    bigNumber = a;
  }

  let result = 0;

  for (let i = smallNumber; i <= bigNumber; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
