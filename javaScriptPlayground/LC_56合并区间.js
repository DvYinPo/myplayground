/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((x, y) => x[0] - y[0]);
  let currentIndex = 0;
  while (currentIndex < intervals.length - 1) {
    if (intervals[currentIndex][1] >= intervals[currentIndex + 1][0]
      && intervals[currentIndex + 1][1] > intervals[currentIndex][1]) {
      intervals.splice(currentIndex, 0, [intervals[currentIndex][0], intervals[currentIndex + 1][1]]);
      intervals.splice(currentIndex + 1, 2);
    } else if (intervals[currentIndex][1] >= intervals[currentIndex + 1][0]
      && intervals[currentIndex + 1][1] < intervals[currentIndex][1]) {
      intervals.splice(currentIndex + 1, 1);
    } else if (intervals[currentIndex][1] >= intervals[currentIndex + 1][0]
      && intervals[currentIndex + 1][1] === intervals[currentIndex][1]) {
      intervals.splice(currentIndex + 1, 1);
    } else if (intervals[currentIndex][1] < intervals[currentIndex + 1][0]) {
      currentIndex += 1;
    }
  }
  return intervals;
};

console.log(merge([[4, 5], [2, 4], [4, 6], [3, 4], [0, 0], [1, 1], [3, 5], [2, 2]]));
