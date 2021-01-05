const subarraySum = function (nums, k) {
  const map = { 0: 1 };
  let sum = 0;
  let total = 0;
  for (let num of nums) {
    console.log("------");
    sum = sum + num;
    console.log(sum - k);
    total += map[sum - k] || 0;
    console.log(total);
    map[sum] = (map[sum] || 0) + 1;
    console.log(map);
  }
  return total;
};

// console.log(subarraySum([1, 1, 1], 2));
// console.log(subarraySum([1, 2, 3], 3)); // 2
console.log(subarraySum([3, 4, 7, 2, -3, 1, 4, 2], 7)); // 4
