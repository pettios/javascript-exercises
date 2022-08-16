const ftoc = function (temp) {
  let result = (temp - 32) / 1.8;

  result = Math.round(result * 10) / 10;
  return result;
};

const ctof = function (temp) {
  let result = temp * 1.8 + 32;
  result = Math.round(result * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
