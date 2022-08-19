const caesar = function (phrase, shift) {
  let phraseArray = phrase.split("");
  let outputArray = [];
  let newOffset = 0;

  if (shift > 0) {
    shift = shift % 26;
  } else {
    shift = (shift * -1) % 26;
    shift = shift * -1;
  }

  for (let i = 0; i < phraseArray.length; i++) {
    // console.log(phraseArray[i]);
    let code = phraseArray[i].charCodeAt();
    if (code >= 65 && code <= 90) {
      //console.log("Found valid letter");
      if (code + shift < 65) {
        newOffset = code + shift - 65;
        code = 90 + newOffset + 1;
        outputArray.push(String.fromCharCode(code));
      } else if (code + shift > 90) {
        code = 65 + (code + shift - 90 - 1);
        outputArray.push(String.fromCharCode(code));
      } else {
        code = code + shift;
        outputArray.push(String.fromCharCode(code));
      }
    } else if (code >= 97 && code <= 122) {
      if (code + shift < 97) {
        newOffset = code + shift - 90;
        code = 120 + newOffset + 1;
        outputArray.push(String.fromCharCode(code));
      } else if (code + shift > 122) {
        code = 97 + (code + shift - 122 - 1);
        outputArray.push(String.fromCharCode(code));
      } else {
        code = code + shift;
        outputArray.push(String.fromCharCode(code));
      }
    } else {
      outputArray.push(String.fromCharCode(code));
    }
  }
  return outputArray.join("");
};

// Do not edit below this line
module.exports = caesar;
