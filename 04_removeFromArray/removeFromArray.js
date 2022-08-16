const removeFromArray = function () {
  let result = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (result[j] === arguments[i]) {
        result.splice(j, 1);
      }
    }
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
