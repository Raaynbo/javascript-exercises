const convertToCelsius = function(temp) {
  // create an integer variable init with 0 called response
  let response = 0;
  // substract the passed temp by 32 and store it in response
  // multiply response by 5
  // divide response by 9
  response = ((temp - 32) *5)/9;
  // round response
  response = Number(response.toFixed(1));
  // return response
  return response;
};

const convertToFahrenheit = function(temp) {
  // create an integer variable init with 0 called response
  let response = 0;
  // multiply response by 9
  // divide response by 5
  // add 32 to response
  response = ((temp * 9)/5)+32; 
  // round response 
  response = Number(response.toFixed(1));
  // return response
  return response;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
