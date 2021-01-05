let assert = require("assert");
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
// and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

const merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let merged = [intervals[0].slice()];
  for (let i = 1; i < intervals.length; i++) {
    let [_, mergedEnd] = merged[merged.length - 1];
    let [currStart, currEnd] = intervals[i];
    if (currStart <= mergedEnd) {
      merged[merged.length - 1][1] = Math.max(currEnd, mergedEnd);
    } else {
      merged.push([currStart, currEnd]);
    }
  }
  return merged;
};

let in1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
let out1 = [
  [1, 6],
  [8, 10],
  [15, 18],
];
console.log(merge(in1));
assert.deepStrictEqual(merge(in1), out1);

let in2 = [
  [1, 4],
  [4, 5],
];
let out2 = [[1, 5]];

console.log(merge(in2));
assert.deepStrictEqual(merge(in2), out2);
