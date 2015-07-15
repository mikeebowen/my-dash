'use strict';

module.exports = function (arr) {
  //create new array to return
  var newArr = [];
  //loop over arr parameter and push truthy values to newArr
  for (var i = 0; i < arr.length; i++) {
    //if the value is truth, push it to the new array
    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }
  //return newArr
  return newArr;
};
