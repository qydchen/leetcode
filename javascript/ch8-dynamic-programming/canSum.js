// Write a function canSum(targetSum, numbers) that takes
// in a targetSum and an array of numbers as arguments.

// The function should return a boolean indicating whether or not it
// is possible to generate the targetSum using numbers from the array

// You may use an element of the array as many times as needed.

// You may assume that all input numbers are nonnegative
let d = 0;
const canSum = (n, arr, memo = {}) => {
    d++;
    if (n in memo) return memo[n];
    if (n === 0) return true;
    for (let val of arr) {
        if (n - val >= 0) {
            let res = canSum(n - val, arr, memo);
            memo[n - val] = res;
            if (memo[n - val]) return memo[n - val];
        }
    }
    return false;
};

let c = 0;
const canSumNoMemo = (n, arr) => {
    c++;
    if (n === 0) return true;
    for (let val of arr) {
        if (n - val >= 0) {
            let res = canSum(n - val, arr);
            if (res) return res;
        }
    }
    return false;
};

// console.log(canSum(28, [5, 3, 4, 7, 1, 4, 5, 6]));
// console.log(canSum(7, [5, 3, 2, 7]));
//             7
//      -5. -3. -4. -7.
//       2   4   3   0
//       -.3 -.4 -.3
//         1   0 0

// console.log(canSum(7, [2, 4, 6]));
console.log(canSumNoMemo(8, [2, 3, 5]));
console.log(canSum(8, [2, 3, 5]));
// canSumNoMemo(300, [7, 14]);
// canSum(300, [7, 14]);
console.log(d);
console.log(c);
