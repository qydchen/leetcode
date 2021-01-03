const assert = require("assert");
/**
 * Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
 * The functino should find all triplets in the array that sum up to the target sum and return a two-dimensional array
 * of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets
 * themselves should be ordered in ascending order with respect to the numbers they hold.
 *
 * If no three numbers sum up to the target sum, the function should return an empty array
 */

function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];
      // Since the array is now sorted, moving the left pointer up will lead to a greater sum;
      // moving the right pointer down will leader to a smaller sum
      if (currentSum === targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }
  return triplets;
}

const array = [12, 3, 1, 2, -6, 5, -8, 6];
const targetSum = 0;
const output = [
  [-8, 2, 6],
  [-8, 3, 5],
  [-6, 1, 5],
];

const actual = threeNumberSum(array, targetSum);
console.log(actual);

assert.deepEqual(actual, output);
