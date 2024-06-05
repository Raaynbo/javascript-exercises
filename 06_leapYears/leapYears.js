const leapYears = function(year) {
  // create a boolean variable set to false called response
  let response = false;
  // check if year is divisible by 4 and by 400
  if (year % 4 == 0 && ((year % 100 != 0)|| (year%100 == 0 && year%400==0)) ){
    
    response = true;
  }
  // assign true to response when it's divisible otherwise assign false
  // return response
  return response;
};

// Do not edit below this line
module.exports = leapYears;
