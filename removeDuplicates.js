// Given a shorted array, remove the duplicates in-place such that each
// element appear only once and return the new length.


// O(n) time where n is the length of the array,
// O(1) space
const removeDuplicates = function(nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
