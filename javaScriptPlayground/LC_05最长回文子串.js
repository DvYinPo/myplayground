/**
 * @param {string} s
 * @return {string}
 * dynamic planning
 */
var longestPalindrome = function (s) {
  const dp = [];
  let maxS = '';
  for (let i = s.length - 1; i >= 0; i--) {
    dp[i] = [];
    for (let j = i; j < s.length; j++) {
      if (i === j) {
        dp[i][j] = true;
      } else if (j - i === 1 && s[i] === s[j]) {
        dp[i][j] = true;
      } else if (j - i > 1 && dp[i + 1][j - 1] && s[i] === s[j]) {
        dp[i][j] = true;
      } else {
        dp[i][j] = false;
      }
      if (dp[i][j] && j - i + 1 > maxS.length) {
        maxS = s.substring(i, j + 1);
      }
    }
  }
  return maxS;
};
console.log(longestPalindrome('cbbd'));
