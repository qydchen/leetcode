// O(n) time
function fib(n, memo = {}) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (!memo[n]) {
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  }
  return memo[n];
}


// O(2 ^ n) time
// function fib(n) {
//   if (n <= 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   } else {
//     return fib(n - 1) + fib(n - 2);
//   }
// }

console.log(fib(40));
