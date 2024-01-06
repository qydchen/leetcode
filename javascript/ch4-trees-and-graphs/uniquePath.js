// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

// Example 1:

// Input: m = 3, n = 7
// Output: 28
// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const serialize = (m, n) => `${m},${n}`;
var uniquePaths = function (m, n) {
  let memo = {};
  const dfs = (row, col) => {
    const serial = serialize(row, col);
    if (serial in memo) {
      return memo[serial];
    }
    if (row > m - 1 || col > n - 1) {
      return 0;
    }
    if (row === m - 1 && col === n - 1) {
      return 1;
    }
    let rig = dfs(row, col + 1);
    let bot = dfs(row + 1, col);
    memo[serial] = rig + bot;
    return memo[serial];
  };
  return dfs(0, 0);
};
