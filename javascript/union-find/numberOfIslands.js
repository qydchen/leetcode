/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
An island is surrounded by water and is formed by connecting adjacent lands horizontally
or vertically. You may assume all four edges of the grid are all surrounded by water.
*/
// Input: grid = [
//     ["1", "1", "1", "1", "0"],
//     ["1", "1", "0", "1", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "0", "0", "0"],
// ];
// Output: 1;

// Input: grid = [
//     ["1", "1", "0", "0", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "1", "0", "0"],
//     ["0", "0", "0", "1", "1"],
// ];
// Output: 3;

const grid1 = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
];

const grid2 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
];

const numberOfIslands = (grid) => {
    const visited = Array(grid.length)
        .fill()
        .map((_, i) => Array(grid[i].length).fill(false));
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (traverse(grid, i, j, visited) > 0) {
                count++;
            }
        }
    }
    return count;
};

const traverse = (grid, i, j, visited) => {
    if (i >= grid.length || i < 0) return 0;
    if (j >= grid[i].length || j < 0) return 0;
    if (visited[i][j]) return 0;
    let curr = grid[i][j];
    if (curr === "1") {
        visited[i][j] = true;
        let bot = traverse(grid, i + 1, j, visited);
        let top = traverse(grid, i - 1, j, visited);
        let rig = traverse(grid, i, j + 1, visited);
        let lef = traverse(grid, i, j - 1, visited);
        return bot + top + rig + lef + 1;
    }
    return 0;
};

console.log(numberOfIslands(grid1));
console.log(numberOfIslands(grid2));
