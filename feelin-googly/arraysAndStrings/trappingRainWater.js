const assert = require('assert');
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
    let highest = null;
    let count = 0;
    for (let i = 0; i < height.length; i++) {
        let current = height[i];
        if (highest === null) {
            highest = current;
        }
        for (let j = i + 1; j < height.length; j++) {
            let leading = height[j];
            if (highest > leading) {
                count += highest - leading;
            } else {
                highest = leading;
                i = j;
                break;
            }
        }
    }
    return count;
};

assert.equal(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);