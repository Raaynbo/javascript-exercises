const sumAll = function(numA, numB) {
  // create a variable called response init with 0
  let response = 0;
  // create an integer variable called startingNum init with 0
  let startingNum = 0;
  let endNum = 0;

  // when numA or numB is negative or not a number return ERROR

  if (typeof(numA)!="number" || typeof(numB) != "number"){
    return response = "ERROR";
  }
  if (numA < 0 || numB < 0){
    return response = "ERROR";
  }
  // find lowest number and store it in startingNum
  if (numA > numB){
    startingNum = numB;
    endNum = numA;
  }else if (numA < numB){
    startingNum = numA;
    endNum = numB;
  }
  // iterate as long as startingNum <= numB
  while(startingNum <= endNum){
  // make the sum of starting num and response and store it in response
  response += startingNum;
  // add 1 to starting num
  startingNum +=1;
  }
  return response;
};

// Do not edit below this line
module.exports = sumAll;
