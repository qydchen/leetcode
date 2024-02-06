/**
 * @param {number[][]} grid
 * @return {number}
 */
const serialize = (i,j) => `${i},${j}`;
var minPathSum = function(grid) {
    let ans = dfs(0,0);
    function dfs(i,j, memo = {}) {
        if (i === grid.length - 1 && j === grid[0].length - 1) return grid[i][j];
        if (i >= grid.length || j >= grid[0].length) return Infinity;
        const k = serialize(i,j);
        if (k in memo) return memo[k];
        let right = dfs(i + 1, j, memo);
        let down = dfs(i, j + 1, memo);
        memo[k] = Math.min(right,down) + grid[i][j];
        return memo[k];
    }
    return ans;
};