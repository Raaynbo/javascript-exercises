const repeatString = function(text, count) {
  let response = "";
  if (count < 0){
    return "ERROR";
  }
  for (i = 0; i < count; i++){
    response += text;
  }
  return response;
};

// Do not edit below this line
module.exports = repeatString;
