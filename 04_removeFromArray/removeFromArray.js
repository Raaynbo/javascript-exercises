const removeFromArray = function(array) {
    let toDel = [];
    for (let i = 1; i <= arguments.length-1 ; i++){
      array.map((el, index) => {
        if (el === arguments[i]){
          toDel.push(index);
        }
      });
    }
  toDel = toDel.sort(function(a, b){return b-a});
  console.log("index to del "+ toDel);
  for (let i= 0; i <=toDel.length-1; i++){
    array.splice(toDel[i],1);
    console.log(toDel[i-1]);
  }
  
  console.log(array);
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
