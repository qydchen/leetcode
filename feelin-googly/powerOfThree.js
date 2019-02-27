const assert = require('assert');
// Given an integer, write a function to determine if it is a power of three.
const isPowerOfThree = n => {
    let compare = 1;
    while (compare < n) {
        compare *= 3;
    }
    return compare === n;
}

assert.equal(isPowerOfThree(27), true);
assert.equal(isPowerOfThree(0), false);
assert.equal(isPowerOfThree(9), true);
assert.equal(isPowerOfThree(45), false);