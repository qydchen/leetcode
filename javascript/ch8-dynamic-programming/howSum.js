// Write a function howSum(targetSum, numbers) that takes
// in a targetSum and an array of numbers as arguments.

// The function should return an array containing any combination
// of elements that add up to exactly the targetSum. If there is no
// combination that adds up to the targetSum, then return null.

// If there are multiple combinations possible, you may return any
// single one.

// const howSum = (target, numbers) => {
//     if (target < 0) return null;
//     if (target === 0) return [];
//     for (let num of numbers) {
//         let res = howSum(target - num, numbers);
//         if (res !== null) {
//             res.push(num);
//             return res;
//         }
//     }
//     return null;
// };

// console.log(howSum(7, [5, 3, 4, 7])); // => [3,4]
// console.log(howSum(8, [2, 3, 5])); // => [3,5]
// console.log(howSum(7, [2, 4])); // => null
// console.log(howSum(0, [1, 2, 3])); // []

// All possible combinations
// const howSum = (target, numbers) => {
//     if (target < 0) return null;
//     if (target === 0) return [[]];
//     let res = [];
//     for (let num of numbers) {
//         const currentRes = howSum(target - num, numbers);
//         if (currentRes === null) continue;
//         for (let arr of currentRes) {
//             arr.push(num);
//         }
//         res = [...res, ...currentRes];
//     }
//     return res;
// };

// console.log(howSum(7, [5, 3, 4, 7]));
// [ [ 4, 3 ], [ 3, 4 ], [ 7 ] ]
// console.log(howSum(8, [2, 3, 5]));
// [
//   [ 2, 2, 2, 2 ],
//   [ 3, 3, 2 ],
//   [ 3, 2, 3 ],
//   [ 2, 3, 3 ],
//   [ 5, 3 ],
//   [ 3, 5 ]
// ]
// console.log(howSum(0, [1, 2, 3]));
// []
// console.log(howSum(7, [2, 4]));
// [ [] ]
