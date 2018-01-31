// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
//
// Find all the elements that appear twice in this array.
//
// Could you do it without extra space and in O(n) runtime?
//
// Example:
// Input:
// [4,3,2,7,8,2,3,1]
//
// Output:
// [2,3]

const findDuplicates = function(nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        // console.log('calced index', index)
        // console.log('current num', nums[i])
        if (nums[index] < 0) {
            // console.log(`nums[index] ${nums[index]} is less tha 0`);
            res.push(Math.abs(nums[i]));
        } else {
            // console.log(`nums[index] ${nums[index]} is positive so switch signs`)
            nums[index] *= -1
            // console.log(`nums[index] is now ${nums[index]}`);
        }
        // console.log('---------')
    }
    console.log(nums);
    return res;
};

findDuplicates([4,3,2,7,8,2,3,1]);
