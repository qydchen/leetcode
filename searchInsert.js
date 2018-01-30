// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//
// You may assume no duplicates in the array.
//
// Example 1:
//
// Input: [1,3,5,6], 5
// Output: 2
// Example 2:
//
// Input: [1,3,5,6], 2
// Output: 1
// Example 3:
//
// Input: [1,3,5,6], 7
// Output: 4
// Example 1:
//
// Input: [1,3,5,6], 0
// Output: 0

const searchInsert = function(nums, target) {
  for (const i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
    if (i === 0 && target < nums[0]) {
      return 0;
    }
    if (target > nums[i] && target < nums[i + 1]) {
      return i + 1;
    }
    if (i === nums.length - 1 && target > nums[i]) {
      return nums.length;
    }
  }
};
