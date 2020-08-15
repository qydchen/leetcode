const assert = require("assert");
// https://leetcode.com/explore/featured/card/google/59/array-and-strings/341/
/* Trapping Rain Water
Go to Discuss
Given n non - negative integers representing an elevation map where the width
of each bar is 1, compute how much water it is able to trap after raining.

The above elevation map is represented by array[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1].
In this case, 6 units of rain water(blue section) are being trapped.Thanks Marcos for contributing this image!

Example:
Input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
Output: 6
*/
const trap = (height) => {
    let totalAmount = 0;
    if (height === null || height.length === 0) {
        return totalAmount;
    }
    const runningMax = height.reduce((a, e, i) => {
        return a.length > 0 ? [...a, Math.max(e, a[i - 1])] : [0];
    }, []);
    let rightHighest = 0;
    for (let i = height.length - 1; i >= 0; i--) {
        rightHighest = Math.max(height[i], rightHighest);
        totalAmount +=
            Math.min(runningMax[i], rightHighest) > height[i]
                ? Math.min(runningMax[i], rightHighest) - height[i]
                : 0;
    }
    return totalAmount;
};

// time O(n), 2 for loop iterations
// space O(n), leftHighest generates an array based on the size of the input

assert.equal(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
