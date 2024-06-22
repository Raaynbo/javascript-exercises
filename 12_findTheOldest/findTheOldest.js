const findTheOldest = function(ppleArray) {
  const result = ppleArray.sort((ppleA, ppleB) => {
    return (ppleA.yearOfDeath - ppleA.yearOfBirth) - (ppleB.yearOfDeath - ppleB.yearOfBirth);
  }).pop();
  return result;
};

// Do not edit below this line
module.exports = findTheOldest;
