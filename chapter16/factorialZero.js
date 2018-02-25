// Write an algorithm with computes the number of trailing zeros in n factorial.

// count the number of pairs of 5 and 2
function factorialZero(n) {
  let pairs = {'5': 0, '2': 0}
  for (let i = n; i >= 0; i--) {
    if (i % 5 === 0) {
      pairs[5] += i / 5;
    }
    if (i % 2 === 0) {
      pairs[2] += i / 2;
    }
  }
  console.log(pairs)
  return Math.min(pairs[5], pairs[2]);
}

console.log(factorialZero(5)) // 5 * 4 * 3 * 2 * 1 = 120; // that is 1 trailing zero
console.log(factorialZero(19)) // 6 trailing zeros
