const assert = require("assert");

/**
 * Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
Example 1:

Input: [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.
Example 2:

Input: [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.
Example 3:

Input: [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
  */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = function (intervals) {
    // let count = 0,
    //     first = null,
    //     last = null;
    // for (let interval of intervals) {
    //     if (!first && !last) {
    //         [first, last] = interval;
    //         continue;
    //     }
    //     if (first === interval[1]) {
    //         first = interval[0];
    //         continue;
    //     }
    //     if (last === interval[0]) {
    //         last = interval[1];
    //         continue;
    //     }
    //     if (
    //         (first >= interval[0] && first <= interval[1]) ||
    //         (last >= interval[0] && last <= interval[1])
    //     ) {
    //         console.log(first, last, interval);
    //         count += 1;
    //     }
    // }
    // return count;
};

const t1 = [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
];

// assert.equal(eraseOverlapIntervals(t1), 1);

// assert.equal(
//     eraseOverlapIntervals([
//         [1, 2],
//         [1, 2],
//         [1, 2],
//     ]),
//     2
// );

// assert.equal(
//     eraseOverlapIntervals([
//         [1, 2],
//         [2, 3],
//     ]),
//     0
// );

assert.equal(
    eraseOverlapIntervals([
        [1, 100],
        [11, 22],
        [1, 11],
        [2, 12],
    ]),
    2
);
