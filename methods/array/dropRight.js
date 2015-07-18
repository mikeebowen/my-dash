'use strict';

module.exports = function (arr, trim) {
  var outputArr = [];
  if (typeof trim === 'undefined') {
    trim = 1;
  };
  outputArr = arr.slice(0, arr.length - trim);
  return outputArr;
};
