function twoSum(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (obj[num] === undefined) {
      obj[target - num] = i;
    } else if (obj[num] !== undefined) {
      return [obj[num], i];
    }
  }
}

let nums = [3,3]
console.log(twoSum(nums, 6))
