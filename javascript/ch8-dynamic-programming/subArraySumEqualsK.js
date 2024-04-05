// const subarraySum = function (nums, k) {
//   const map = { 0: 1 };
//   let sum = 0;
//   let total = 0;
//   for (let num of nums) {
//     console.log("------");
//     sum = sum + num;
//     console.log("current running sum", sum);
//     console.log("checking map:", map[sum - k], "sum - k:", sum - k);
//     total += map[sum - k] || 0;
//     console.log("current total", total);
//     map[sum] = (map[sum] || 0) + 1;
//     console.log("saving sum into map", map);
//   }
//   return total;
// };

// // console.log(subarraySum([1, 1, 1], 2));
// // console.log(subarraySum([1, 2, 3], 3)); // 2
// console.log(subarraySum([3, 4, 7, 2, -3, 1, 4, 2], 7)); // 4

const subarraySum = (nums) => {
  const map = { 0: 1 };
  let sum = 0;
  let total = 0;
  for (let num of nums) {
    sum += num;
    total += map[sum] || 0;
    if (!(sum in map)) {
      map[sum] = 0;
    }
    map[sum] += 1;
    console.log(map);
    console.log("checking map:", map[sum], "sum:", sum);
  }
  return total;
};

console.log(subarraySum([1, -1, 0, 2, -2]));

console.log(subarraySum([1, -1, 0]));
