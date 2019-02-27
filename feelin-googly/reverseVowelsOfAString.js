const assert = require('assert');
// Write a function that takes a string as input and reverse only the vowels of a string

const reverseVowels = s => { // O(n) time, O(n) space where we have to store the vowels
    const vowels = 'aeiouAEIOU';
    let store = [];
    for (let i = 0; i < s.length; i += 1) {
        if (vowels.indexOf(s[i]) > -1) {
            store = store.concat(s[i]);
        }
    }
    let sArr = s.split('');
    for (let i = 0; i < sArr.length; i += 1) {
        if (vowels.indexOf(sArr[i]) > -1) {
            sArr[i] = store.pop();
        }
    }
    return sArr.join('');
}

assert.equal(reverseVowels('hello'), 'holle');
assert.equal(reverseVowels('leetcode'), 'leotcede');
assert.equal(reverseVowels('aA'), 'Aa');