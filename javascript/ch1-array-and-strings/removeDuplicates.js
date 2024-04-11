/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let uniq = 0;
  for (let curr = 1; curr < nums.length; curr++) {
    if (nums[curr] !== nums[uniq]) {
      uniq++;
      [nums[uniq], nums[curr]] = [nums[curr], nums[uniq]];
    }
  }
  return uniq + 1;
};
