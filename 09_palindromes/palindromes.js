const palindromes = function (stringToCheck) {
  // Remove whitespace
  let cleanedString = stringToCheck.replace(/\s/g, "");
  // Remove punctuation
  cleanedString = cleanedString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  cleanedString = cleanedString.toLowerCase();

  let reversedString = "";
  for (let i = cleanedString.length - 1; i >= 0; i--) {
    reversedString += cleanedString[i];
  }

  if (cleanedString === reversedString) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
