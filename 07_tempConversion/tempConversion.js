const convertToCelsius = function(temp) {
  // create an integer variable init with 0 called response
  let response = 0;
  // substract the passed temp by 32 and store it in response
  // multiply response by 5
  // divide response by 9
  response = ((temp - 32) *5)/9;
  // round response
  // return response
  return response;
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
