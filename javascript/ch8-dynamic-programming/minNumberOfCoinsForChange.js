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

// [Infinity, Infinity, Infinity, Infinity]

// denom = 2
// amt = 0
// 2 >= 2
// mins[2] = Min(Infinity, mins(2 - 2) + 1);
// []


console.log(minNumberOfCoinsForChange(3, [2, 1]));
// console.log(minNumberOfCoinsForChange(50, [2, 1, 5]));

function minNumberOfCoinsForChangeIterative(denoms, m, V){

    // Base case
    if (V == 0)
        return 0;

    let res = Infinity;
    // Try every coin that has smaller
    // value than V
    for(let i = 0; i < m; i++){
        if (denoms[i] <= V){
            let sub_res = minNumberOfdenomsForChangeIterative(denoms, m,
                               V - denoms[i]);

            // Check for INT_MAX to avoid overflow and
            // see if result can minimized
            if (sub_res != Number.MAX_VALUE &&
                sub_res + 1 < res)
                res = sub_res + 1;
        }
    }
    return res;
}

// Driver code
let denoms = [ 9, 6, 5, 1 ];
let target = 11;
console.log(minNumberOfCoinsForChangeIterative(denoms, target) ));