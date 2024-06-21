const fibonacci = function(n) {
  // calculate fibonacci value, using an integer argument called "n". 
  // to calculate the n-th number of the fibonacci value
  // we have to determine the fibonacci value of each of the precedent value
  let nInt = n;
  if (typeof(n) === "string"){
    nInt = parseInt(n);
  }
  if (nInt < 0){
    return "OOPS";
  }else if ( nInt === 0){
    return 0;
  }else if (nInt === 1){
    return 1;
  }
  let result = fibonacci(n-1) + fibonacci(n-2);
  return result;
};

// Do not edit below this line
module.exports = fibonacci;
