const findTheOldest = function (arrayOfPeople) {
  let oldestPerson;
  let oldestAge = 0;

  arrayOfPeople.reduce((oldestAgeFromArray, nextPerson) => {
    if (!nextPerson.hasOwnProperty("yearOfDeath")) {
      nextPerson.yearOfDeath = new Date().getFullYear();
    }
    let age = nextPerson.yearOfDeath - nextPerson.yearOfBirth;
    if (age > oldestAgeFromArray) {
      oldestPerson = nextPerson;
      return age;
    }
    return oldestAgeFromArray;
  }, oldestAge);
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
