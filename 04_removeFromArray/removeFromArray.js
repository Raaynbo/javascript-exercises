const removeFromArray = function(array) {
    for (let i = 1; i <= arguments.length-1 ; i++){
      let idx = array.indexOf(arguments[i]);
      array.splice(idx,1);
    }
  
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
