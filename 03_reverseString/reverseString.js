const reverseString = function(text) {
  //get text to reverse
  //store text into an empty string var called original
  let original = text;
  //create an empty string var called response
  let response = "";
  //get text length
  let length = text.length;
  //make a loop to explore text from last to first character
  for (i = length-1; i >= 0; i--){
    response += original[i];
    console.log(original[i]);
  }
  //return response
  return response;

};

// Do not edit below this line
module.exports = reverseString;
