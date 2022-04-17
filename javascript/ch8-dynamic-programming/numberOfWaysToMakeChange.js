/*
Given an array of distinct positive integers representing coin denominations and a single non-negative integer n representing
a target amount of money, write a function that returns the number of ways to make
change for that target amount using the given coin denominations

Note that an unlimited amount of coins is at your disposal

Sample input
n = 6;
denoms = [1,5]

Sample output
2 // 1x1 + 1x5 and 6x1
*/

// Time O(nd) where the d is the length of denominations times the array ways of length of n + 1
// Space O(n) where the array ways is length of n + 1
const numberOfWaysToMakeChange = (n, denoms) => {
  const ways = new Array(n + 1).fill(0);
  ways[0] = 1;
  for (let denom of denoms) {
    console.log("------");
    console.log(denom);
    for (let amount = 0; amount < ways.length; amount += 1) {
      if (denom <= amount) {
        ways[amount] = ways[amount] + ways[amount - denom];
        console.log(ways);
      }
    }
  }
  return ways[ways.length - 1];
};

console.log(numberOfWaysToMakeChange(7, [1, 5])); // 2
// console.log(numberOfWaysToMakeChange(6, [1, 5])); // 2
// console.log(numberOfWaysToMakeChange(124, [1, 5, 10, 25])); // 382
// console.log(numberOfWaysToMakeChange(10, [1, 5, 10, 25])); // 4
