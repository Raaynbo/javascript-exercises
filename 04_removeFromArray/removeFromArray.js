const removeFromArray = function(array) {
  //store arguments in array called argsArray
  let args = [];
  if (arguments.length > 2){
    for (let i = 1; i <= arguments.length-1 ; i++){
      args.push(arguments[i]);
    }
  }else{
      args = arguments[1];
  }
  if (Array.isArray(args) === true ){
    
  } else {
    let idx = array.indexOf(args);
    
    array.splice(idx,1);
  }
  console.log(array);
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
