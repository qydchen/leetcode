/* 
Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Count the number of distinct islands. An island is considered to be the same as another if and only if one island can be translated (and not rotated or reflected) to equal the other.

Example 1:
11000
11000
00011
00011
Given the above grid map, return 1.
Example 2:
11011
10000
00001
11011
Given the above grid map, return 3.

Notice that:
11
1
and
 1
11
are considered different island shapes, because we do not consider reflection / rotation.
Note: The length of each dimension in the given grid does not exceed 50.
 */
const numDistinctIslands = function (grid) {
    let visited = new Array(grid.length)
        .fill()
        .map((_, i) => new Array(grid[i].length).fill(false));
    let islands = new Set();
    for (let i = 0; i < grid.length; i += 1) {
        for (let j = 0; j < grid[i].length; j += 1) {
            let islandCoords = [];
            visit(i, j, grid, visited, islandCoords);
            if (islandCoords.length > 0) {
                islands.add(serialize(islandCoords));
            }
        }
    }
    return islands.size;
    function visit(i, j, grid, visited, islandCoords) {
        if (i < 0 || i > grid.length - 1) return false;
        if (j < 0 || j > grid[i].length - 1) return false;
        if (visited[i][j]) return false;
        visited[i][j] = true;
        if (grid[i][j] === 1) {
            islandCoords.push([i, j]);
            if (
                visit(i + 1, j, grid, visited, islandCoords) ||
                visit(i - 1, j, grid, visited, islandCoords) ||
                visit(i, j + 1, grid, visited, islandCoords) ||
                visit(i, j - 1, grid, visited, islandCoords)
            ) {
                return true;
            }
        }
        return false;
    }
};

const serialize = (coords) => {
    let smallestI = coords.reduce((a, b) => Math.min(b[0], a), Infinity);
    let smallestJ = coords.reduce((a, b) => Math.min(b[1], a), Infinity);
    const bounded = coords.map(([i, j]) => [i - smallestI, j - smallestJ]);
    return JSON.stringify(bounded);
};

const test1 = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
];

console.log(numDistinctIslands(test1)); // 1
