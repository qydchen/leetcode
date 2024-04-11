/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let diff = null;
  for (let i = 0; i < nums.length; i++) {
    let left = nums[i];
    let lo = i + 1;
    let hi = nums.length - 1;
    while (lo < hi) {
      let right = nums[hi];
      let mid = nums[lo];
      let newDiff = left + right + mid;
      if (
        Math.abs(newDiff - target) <= Math.abs(diff - target) ||
        diff === null
      ) {
        diff = newDiff;
        if (newDiff === target) return newDiff;
      }
      if (newDiff < target) {
        lo++;
      } else {
        hi--;
      }
    }
  }
  return diff;
};
