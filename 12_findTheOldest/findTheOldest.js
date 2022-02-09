const TODAY = new Date();
const CURRYEAR = TODAY.getFullYear();

const findTheOldest = function(array) {
    let oldest = calculateOldest(array);
    return array.find(person => (person.yearOfDeath ? person.yearOfDeath : CURRYEAR) - person.yearOfBirth == oldest);
};

function calculateOldest(array) {
    return array.reduce(function(acc, el) {
        let death = el.yearOfDeath ? el.yearOfDeath : CURRYEAR;
        let years = death - el.yearOfBirth;
        if (acc > years) {
            return acc;
        }
        return years;
    }, 0)
}

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
    {
      name: "Danny",
      yearOfBirth: 1592,
    },
  ]

  console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
