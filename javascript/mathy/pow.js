// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

// Constraints:

// -100.0 < x < 100.0
// -231 <= n <= 231-1
// n is an integer.
// Either x is not zero or n > 0.
// -104 <= xn <= 104

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (base, pow) {
  // O(log(pow)) time, O(log(pow)) space
  if (base === 0 && pow === 0) return NaN;
  if (pow === 0) return 1;
  let power = pow < 0 ? -pow : pow;
  let recurse = (b, p) => {
    if (p === 0) return 1;
    if (p === 1) return b;
    let ans = recurse(b, Math.floor(p / 2));
    ans *= ans;
    if (p % 2 === 1) {
      ans *= base;
    }
    return ans;
  };

  let ans = recurse(base, power);
  return pow < 0 ? 1 / ans : ans;
};
