const palindromes = function (input) {
  // function has 1 argument, called input, it's a string
  // sanitize "input" lowercase + remove punctuation
  const regexp = /[a-z0-9]/g;
  // create a array variable called inputArray;
  let lCase = input.toLowerCase().split("").filter(char => char.match(regexp)).join("");
  // create a string variable called "reverse" initialized with the reverse string of input
  // compare reverse and input if equals set isPalindrome to true;
  const reverse = lCase.split("").reverse().join("");

  return reverse === lCase;
  // return isPalindrome;

  
};

// Do not edit below this line
module.exports = palindromes;
