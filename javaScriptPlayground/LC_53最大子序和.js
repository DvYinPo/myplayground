/**
 * @param {number[]} nums
 * @return {number}
 * 子序每增加一位，最大的结果都依赖前面的最大和dp，dp要么等于自己要么等于前面的子序与自己的和
 */
var maxSubArray = function (nums) {
  let result = nums[0];
  let dp = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp = Math.max(dp + nums[i], nums[i]);
    result = Math.max(dp, result);
  }
  return result;
};
