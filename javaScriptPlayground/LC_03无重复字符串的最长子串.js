/**
 * @param {string} s
 * @return {number}
 * e.g.
 * 'pwkewpp'
 * 'pwpewjh'
 * 'saswpkewpp'
 */
var lengthOfLongestSubstring = function (s) {
  let arr = ''; // 最大子串栈
  let h = ''; // 当前字符
  let headIndex = 0;
  let MAX = 0;
  for (let i = 0; i < s.length; i++) {
    h = s.substr(i, 1);
    if (arr.length === 0) {
      arr += h;
    } else {
      // eslint-disable-next-line no-restricted-syntax
      // eslint-disable-next-line no-lonely-if
      if (arr.indexOf(h) !== -1) {
        const left = arr.indexOf(h) + 1;
        if (MAX < arr.length) {
          MAX = arr.length;
        }
        arr = '';
        headIndex += left;
        i = headIndex - 1;
      } else {
        arr += h;
      }
    }
  }
  if (MAX < arr.length) {
    MAX = arr.length;
  }
  return MAX;
};
