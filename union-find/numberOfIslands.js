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
