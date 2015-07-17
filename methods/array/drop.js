'use strict';

module.exports = function drop (arr, trim) {
  //if arr is not a number give an error message in the console
  if (!Array.isArray(arr)) {
    console.error(arr + ' is not an array');
  };
  //if trim is not a number give an error message in the console
  if (typeof trim !== 'number') {
    console.error(trim + ' is not a number');
  };
  //if arr is an array and trim is a number return a sliced array removing trim number of values
  if (Array.isArray(arr) && typeof trim === 'number') {
    return arr.slice(trim, arr.length);
  };
}
