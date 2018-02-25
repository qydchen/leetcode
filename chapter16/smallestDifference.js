// Given two arrays of integers, computer the pair of values (one value in
// each array) with the smallest (non-negative) difference. Return the difference.

// O(A log A * B log B)

function smallestDifference(arrA, arrB) {
  let sorted1 = arrA.slice().sort((x,y) => x - y);
  let sorted2 = arrB.slice().sort((x,y) => x - y);
  let i = 0, j = 0, difference = null;
  while (i < sorted1.length && j < sorted2.length) {
    let num1 = sorted1[i], num2 = sorted2[j];
    let newDiff = Math.abs(num1 - num2);
    if (difference === null || newDiff < difference) difference = newDiff;
    num1 < num2 ? i++ : j++;
  }
  return difference;
}

const a1 = [1, 3, 15, 11, 2];
const a2 = [23, 127, 235, 19, 8];
console.log(smallestDifference(a1, a2)); // should return 3, the pair 11, 8
