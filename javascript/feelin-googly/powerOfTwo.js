const assert = require('assert');
// Given an integer, write a function to deteremine if it is a power of two.

const isPowerOfTwo = (n) => { // O(m) time where m is the number of times 'compare' has to exponentiate; O(1) space
    let compare = 1;
    while (compare < n) {
        compare *= 2;
    }
    return compare === n;
};

assert.equal(isPowerOfTwo(1), true);
assert.equal(isPowerOfTwo(16), true);
assert.equal(isPowerOfTwo(218), false);
assert.equal(isPowerOfTwo(-1), false);
