/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = [[]];
  for (let i = 0; i < n; i += 1) { // 第一行dp全为1
    dp[0].push(1);
  }
  for (let i = 1; i < m; i += 1) {
    const temp = [];
    for (let j = 0; j < n; j += 1) {
      const up = dp[i - 1][j];
      let left = temp[j - 1];
      if (temp.length === 0) left = 0;
      temp.push(up + left);
    }
    dp.push(temp);
  }
  return dp[m - 1][n - 1];
};

console.log(uniquePaths(3, 7));
