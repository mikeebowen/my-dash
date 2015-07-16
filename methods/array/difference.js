'use strict';

module.exports = function (array, excluded) {
  //declare array to hold values
  var newArr = [];
  //loop over array and if the value doesn't appear in the excluded array, add it to the newArr array
  for (var i = 0; i < array.length; i++) {
    if (excluded.indexOf(array[i]) === -1) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
