'use strict';

module.exports = function (arr, num) {
  //create variables for function, newArr to return and start and end to define the beginning and end of the slices of the array
  var newArr = [];
  var start = 0;
  var end = num;
  //If the arr argument isn't an array, return an error
  if (!Array.isArray(arr)) {
    return console.error(arr + ' is not an Array.');
  };
  //if the num argument isn't a number
  if (typeof num !== 'number') {
    return console.error(num + ' is not a number');
  };
  //loop over the arr array and push the values into an array and push that array to the newArr array
  for (var i = 0; i < arr.length; i++) {
    //temp array to hold values to be pushed to newArray
    var tmpArr = [];
    //push slice from start to end of input array into tmpArray
    tmpArr.push(arr.slice(start, end));
    //push tmpArr array into newArr array
    newArr.push(tmpArr);
    //if num is greater than or equal to the arr length, return the newArr array
    if (end >= arr.length) {
      return newArr;
    };
    //assign start to end for the next loop
    start = end;
    //add num to end for next loop
    end = end + num;
  }
}
