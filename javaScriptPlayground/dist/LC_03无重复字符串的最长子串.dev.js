"use strict";

/**
 * @param {string} s
 * @return {number}
 * e.g.
 * 'pwkewpp'
 * 'pwpkewpp'
 */
var lengthOfLongestSubstring = function lengthOfLongestSubstring(s) {
  var arr = []; // 最大子串栈

  var h = ''; // 当前字符

  var headIndex = 0;
  var MAX = 0;

  for (var i = 0; i < s.length; i++) {
    h = s.substr(i, 1);

    if (arr.length === 0) {
      arr.push(h);
    } else {
      // eslint-disable-next-line no-restricted-syntax
      for (var index = 0; index < arr.length; index++) {
        if (arr[index] === h) {
          if (MAX < arr.length) {
            MAX = arr.length;
          }

          arr = [];
          headIndex += 1;
          i = headIndex - 1;
        }
      }

      if (arr.length !== 0) {
        arr.push(h);
      }
    }
  }

  if (MAX < arr.length) {
    MAX = arr.length;
  }

  return MAX;
};