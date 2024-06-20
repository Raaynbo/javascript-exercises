const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(data) {
    return data.reduce((tot, value) => {
      return tot + value;
    }, 0);
};

const multiply = function(data) {
    let result = data.reduce((tot, init) => {
    return tot*init;
  }, 1);
  return result;
};

const power = function(value, pow) {
    // create a variable value init with first arguments
  // create a variable power init with second arguments
  let result = value;
  let data = [];
  for (let i =0;i < 3;i++){
  data.push(value);
  }
  result = data.reduce((tot, value)=> {return tot*value}, 1);
  return result;
};

const factorial = function(value) {
  const data = [];
  let result = 1;
  if (value !== 0){
    for (let i = 1; i<= value; i++){
      data.push(i);
    }
    result = data.reduce((tot, value)=> {return tot*value;}, 1);
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
