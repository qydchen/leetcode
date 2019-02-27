const assert = require('assert');
// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list,
// and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

const plusOne = digits => {
    for (let i = digits.length - 1; i >= 0; i -= 1) {
        const digit = digits[i] + 1;
        if (i === 0 && digit === 10) {
            digits[i] = 0;
            digits.unshift(1);
            return digits;
        }
        if (digit === 10) {
            digits[i] = 0;
        } else {
            digits[i] = digit;
            return digits;
        }
    }
}

assert.deepEqual(plusOne([1, 2, 3]), [1, 2, 4]);
assert.deepEqual(plusOne([4, 3, 2, 1]), [4, 3, 2, 2]);
assert.deepEqual(plusOne([8, 9, 9, 9]), [9, 0, 0, 0]);
assert.deepEqual(plusOne([9, 9, 9, 9]), [1, 0, 0, 0, 0]);