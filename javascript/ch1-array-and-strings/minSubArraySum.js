// https://leetcode.com/problems/minimum-size-subarray-sum/

// Example 1:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

const minSubarrayLen = (target, nums) => {
  if (!nums.length) return 0;
  let i = 0,
    count = 0,
    sum = 0,
    finalCount = Infinity,
    leftIdx = 0;
  while (i < nums.length) {
    sum += nums[i];
    if (count === 0) {
      leftIdx = i;
    }
    count++;
    if (sum >= target) {
      while (sum >= target) {
        if (sum - nums[leftIdx] < target) {
          break;
        }
        sum -= nums[leftIdx];
        count--;
        leftIdx++;
      }
      finalCount = Math.min(finalCount, count);
      count = 0;
      sum = 0;
      i = leftIdx;
    }
    i++;
  }
  return finalCount === Infinity ? 0 : finalCount;
};

console.log(minSubarrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubarrayLen(4, [1, 4, 4]));
console.log(minSubarrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));

console.log(minSubarrayLen(11, [1, 2, 3, 4, 5]));
console.log(
  minSubarrayLen(80, [10, 5, 13, 4, 8, 4, 5, 11, 14, 9, 16, 10, 20, 8]) // 6
);
