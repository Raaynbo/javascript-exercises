const palindromes = function (input) {
  // function has 1 argument, called input, it's a string
  // sanitize "input" lowercase + remove punctuation
  // create a array variable called inputArray;
  const inputArray = Array.from(input);
  // create a string variable called "reverse" initialized with the reverse string of input
  const reverse = inputArray.reverse();
  console.log(reverse);
  // create a boolean variable called isPalindrome set to false;
  let isPalindrome = false;
  // compare reverse and input if equals set isPalindrome to true;
  if (inputArray === reverse){
  isPalindrome = true ;
  }
  return isPalindrome;
  // return isPalindrome;

  
};

// Do not edit below this line
module.exports = palindromes;
