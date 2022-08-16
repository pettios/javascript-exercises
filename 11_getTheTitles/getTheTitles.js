const getTheTitles = function (bookArray) {
  result = [];
  bookArray.forEach((element) => {
    result.push(element.title);
  });
  return result;
};

// Do not edit below this line
module.exports = getTheTitles;
