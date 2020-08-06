/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  var headIndex = 0;
  var tailIndex = height.length - 1;
  var MAX = 0;

  if (height.length === 0) return 0;
  while (headIndex < tailIndex) {
    let h = 0;
    if (height[headIndex] >= height[tailIndex]) { // 尾指针比头指针矮
      h = height[tailIndex];
      if (h * (tailIndex - headIndex) >= MAX) {
        MAX = h * (tailIndex - headIndex);
      }
      for (let i = tailIndex - 1; i >= headIndex; i--) {
        if (height[i] > height[tailIndex]) {
          tailIndex = i;
          break;
        }
        if (i === headIndex) tailIndex = headIndex;
      }
    } else { // 尾指针比头指针高
      h = height[headIndex];
      if (h * (tailIndex - headIndex) >= MAX) {
        MAX = h * (tailIndex - headIndex);
      }
      for (let i = headIndex + 1; i <= tailIndex; i++) {
        if (height[i] > height[headIndex]) {
          headIndex = i;
          break;
        }
        if (i === tailIndex) headIndex = tailIndex;
      }
    }
  }
  return MAX;
};
