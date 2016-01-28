'use strict';

module.exports = function (arr) {
  if (Array.isArray(arr)) {
    var uniqueSet = new Set();
    arr.forEach(function (item) {
      uniqueSet.add(item);
    });
    return Array.from(uniqueSet);
  }
};
