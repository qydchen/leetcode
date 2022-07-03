// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

var longestConsecutive = function (nums) {
  if (!nums || nums.length === 0) return 0;
  let roots = {};
  let dic = new Set(nums);
  var find = (idx) => {
    while (roots[idx] !== undefined) idx = roots[idx];
    return idx;
  };

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    while (dic.has(num + 1)) {
      let num_left = find(num);
      let num_right = find(num + 1);
      if (num_left !== num_right) {
        roots[num_left] = num_right;
      }
      num++;
    }
  }

  console.log({ roots });
  // console.log({ dic });
  let max = 1;
  for (let i = 0; i < nums.length; i++) {
    // console.log(find(roots, nums[i]));
    const newMax = Math.abs(find(nums[i]) - nums[i]) + 1;
    console.log(newMax);
    max = Math.max(max, newMax);
  }

  return max;
};

console.log(
  longestConsecutive([
    100, 4, 200, 1, 3, 2, 5, 6, 7, 8, 9, 10, 13, 11, 12, 17, 16, 15, 14, 13,
  ])
);
