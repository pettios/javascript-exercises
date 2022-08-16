const repeatString = function (stringToRepeat, number) {
  if (number < 0) {
    return "ERROR";
  }
  let result = "";
  for (let i = 0; i < number; i++) {
    result += stringToRepeat;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
