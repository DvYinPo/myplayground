/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length === 0) return false;
  if (nums.length === 1) return true;
  let max = nums[0]; // 下一步最大的步数
  let currentIndex = 0; // 当前位置的指针
  while (currentIndex < nums.length - 1) {
    let tempMax = currentIndex; // 能走到的最大位置
    let tempIndex = 0;
    for (let i = 0; i < max; i++) {
      if (tempMax <= currentIndex + 1 + i + nums[currentIndex + 1 + i]) { // 不是拿最大的数，是拿能走最远的数
        tempMax = currentIndex + 1 + i + nums[currentIndex + 1 + i];
        tempIndex = currentIndex + 1 + i;
      }
      if (tempMax >= nums.length - 1) return true;
    }
    currentIndex = tempIndex;
    max = nums[tempIndex];
    if (nums[currentIndex] === 0 && currentIndex < nums.length - 1) {
      return false;
    }
  }
};

// [3,2,1,0,4]
canJump([3, 0, 8, 2, 0, 0, 1]);
