/**
 * @ptram {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict, memo = {}) {
    if (s === "") return true;
    if (memo[s] !== undefined) return memo[s];
    for (let word of wordDict) {
        if (s.indexOf(word) === 0) {
            const trunced = s.slice(word.length);
            if (wordBreak(trunced, wordDict, memo) === true) {
                memo[s] = true;
                return true;
            }
        }
    }
    memo[s] = false;
    return false;
};

var wordBreak = function (s, wordDict) {
    if (s === "") return [];
    for (let word of wordDict) {
        if (s.indexOf(word) === 0) {
            const trunced = s.slice(word.length);
            const recurse = wordBreak(trunced, wordDict);
            if (Array.isArray(recurse)) {
                return recurse.concat(word);
            }
        }
    }
    return null;
};

var wordBreak = function (s, wordDict) {
    if (s === "") return [[]];
    let result = [];
    for (let i = 0; i < wordDict.length; i++) {
        let word = wordDict[i];
        if (s.indexOf(word) === 0) {
            const trunced = s.slice(word.length);
            const recurse = wordBreak(trunced, wordDict); // [[]]
            recurse.forEach((arr) => arr.unshift(word)); // [['cd']]
            result = result.concat(recurse);
        }
    }
    return result;
};

// s = "catsandog"
// wordDict = ["cats", "dog", "sand", "and", "cat"]
// console.log(wordBreak(s, wordDict)); //false

// s = "applepenapple"
// wordDict = ["apple", "pen"]
// console.log(wordBreak(s, wordDict)); //true

console.log(wordBreak("abcd", ["a", "b", "ab", "cd"]));
