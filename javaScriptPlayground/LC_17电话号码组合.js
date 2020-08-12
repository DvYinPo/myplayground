/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  const result = [''];
  const tempOne = [];
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  const dig = digits.split(''); // 将字符串分为数组
  dig.forEach((value1, i) => {
    const temp = map[value1];
    temp.forEach((value2, j) => {
      result.forEach((value3, k) => {
        tempOne.push(value3 + value2);
      });
    });

    result.length = 0;
    tempOne.forEach((value4) => {
      result.push(value4);
    });
    tempOne.length = 0;
  });
  return result;
};

console.log(letterCombinations('23'));
