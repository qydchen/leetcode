/*
Given an array of positive integers representing coin denominations and a single non-negative integer n representing
a target amount of money, write a function that returns the smallest number of coins needed to make change for
(to sum up to) that target amount using the given coin denominations
If it's impossible to make change for the target amount, return -1.
*/

function minNumberOfCoinsForChange(n, denoms) {
    const mins = new Array(n + 1).fill(Infinity);
    mins[0] = 0;
    for (let denom of denoms) {
        for (let amt = 0; amt < mins.length; amt += 1) {
            console.log(mins);
            if (amt >= denom) {
                mins[amt] = Math.min(mins[amt], mins[amt - denom] + 1);
            }
        }
    }
    return mins[mins.length - 1] !== Infinity ? mins[mins.length - 1] : -1;
}

console.log(minNumberOfCoinsForChange(3, [2, 1]));
console.log(minNumberOfCoinsForChange(50, [2, 1, 5]));
