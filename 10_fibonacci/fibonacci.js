const fibonacci = function (num) {
  let myNum = 0;

  if (typeof num === "string") {
    myNum = Number(num);
  } else {
    myNum = num;
  }
  if (myNum === 1) {
    return 1;
  }
  if (myNum === 2) {
    return 1;
  }
  if (myNum < 0) {
    return "OOPS";
  }
  let twoPrevious = 1;
  let onePrevious = 1;
  let result = 0;
  for (let i = 3; i <= myNum; i++) {
    result = onePrevious + twoPrevious;
    twoPrevious = onePrevious;
    onePrevious = result;
  }
  return result;
};

// Do not edit below this line
module.exports = fibonacci;
