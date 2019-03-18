const assert = require('assert');

/*
    Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it.
    If no such solution, return -1.

    For example, with A = 'abcd' and B = 'cdabcdab'.

    Return 3, because by repeating A three times ('abcdabcdabcd), B is a substring of it; and B is not a substring of A repeated two times
    ("abcdabcd").

    Note:

    The length of A and B will be between 1 and 10000
*/

function repeatedStringMatch(A, B) {
    let compare = '';
    for (let i = 0; i < B.length / A.length + 3; i += 1) {
        const idx = compare.indexOf(B);
        if (idx > -1) {
            return i;
        }
        compare += A;
    }
    return -1;
};

const testA = 'abcd';
const testB = 'cdabcdab';
assert.equal(repeatedStringMatch(testA, testB), 3);
const testA1 = 'abz';
const testB1 = 'cab';
assert.equal(repeatedStringMatch(testA1, testB1), -1);
const testA2 = 'abc';
const testB2 = 'cab';
assert.equal(repeatedStringMatch(testA2, testB2), 2);
const testA3 = 'aa';
const testB3 = 'a';
assert.equal(repeatedStringMatch(testA3, testB3), 1);