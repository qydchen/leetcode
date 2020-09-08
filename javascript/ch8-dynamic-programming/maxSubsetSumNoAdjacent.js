/*
Diff: Medium

Write a function that takes in an array of positive integers and returns the maximum sum of non-adjacent elements in the array.
If a sum can't be generated, the function should return 0.
*/

// dp solution
// O(n) time, O(n) space
function maxSubsetSumNoAdjacent(array) {
    if (array.length === 0) return 0;
    if (array.length === 1) return array[0];
    let runningSum = array.slice();
    for (let i = 2; i < runningSum.length; i += 1) {
        runningSum[i] = Math.max(
            array[i] + runningSum[i - 2],
            runningSum[i - 1]
        );
    }
    return Math.max(
        runningSum[runningSum.length - 1],
        runningSum[runningSum.length - 2]
    );
}

// recursive solution
// O(n) time, O(n) space
function maxSubsetSumNoAdjacentRecursive(array) {
    if (array.length === 0) return 0;
    if (array.length === 1) return array[0];
    return Math.max(
        array[0] + maxSubsetSumNoAdjacent(array.slice(2)),
        maxSubsetSumNoAdjacent(array.slice(1))
    );
}

let test = [75, 105, 120, 75, 90, 135]; // 330 = 75 + 120 + 135
console.log(maxSubsetSumNoAdjacent(test));

let test2 = [1, 5, 3]; // 5
console.log(maxSubsetSumNoAdjacent(test2));

let test3 = [1, 2, 3]; // 4
console.log(maxSubsetSumNoAdjacent(test3));
