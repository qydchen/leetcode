// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example:

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.

// Constraints:

// board and word consists only of lowercase and uppercase English letters.
// 1 <= board.length <= 200
// 1 <= board[i].length <= 200
// 1 <= word.length <= 10^3

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// My solution... it fails some test cases though
var exist = function (board, word) {
    if (word.length > board.reduce((a, b) => a + b.length, 0)) return false;
    const beginChar = word[0];
    const beginningCoords = findBeginningCoords(beginChar, board);
    for (let coord of beginningCoords) {
        const visited = new Array(board.length)
            .fill()
            .map((_, i) => new Array(board[i].length).fill(false));
        if (traverse(coord, word, board, visited)) {
            return true;
        }
    }
    return false;
};

function traverse(coord, word, board, visited) {
    const [i, j] = coord;
    const width = board[0].length - 1;
    const height = board.length - 1;
    if (word.length === 0) return true;
    if (j < 0 || i < 0 || j > width || i > height) return false;
    if (board[i][j] === word[0] && visited[i][j] === false) {
        visited[i][j] = true;
        if (
            traverse([i, j + 1], word.slice(1), board, visited) ||
            traverse([i, j - 1], word.slice(1), board, visited) ||
            traverse([i - 1, j], word.slice(1), board, visited) ||
            traverse([i + 1, j], word.slice(1), board, visited)
        ) {
            return true;
        }
        visited[i][j] = false;
    }
    return false;
}

function findBeginningCoords(char, board) {
    let result = [];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === char) {
                result.push([i, j]);
            }
        }
    }
    return result;
}

let b = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
];

console.log(exist(b, "ABCCED")); //true
console.log(exist(b, "SEE")); // true
console.log(exist(b, "ABCB")); // false

let c = ["AAAA".split(""), "AAAA".split(""), "AAAA".split("")];
console.log(exist(c, "A".repeat(12))); // true
console.log(exist(c, "A".repeat(13))); // false

let d = [
    ["a", "b", "b", "a", "b"],
    ["a", "a", "b", "b", "a"],
    ["a", "a", "a", "a", "b"],
    ["a", "a", "a", "b", "a"],
    ["a", "a", "a", "a", "a"],
    ["a", "b", "a", "b", "b"],
    ["a", "b", "b", "a", "b"],
];
console.log(exist(d, "abbbbaababaa")); // false

// Time O(mn * 4^l), l = word.length
// Space O(mn + l)

// const exist1 = (board, word) => {
//     if (board.length === 0) return false;

//     const h = board.length;
//     const w = board[0].length;
//     const dirs = [
//         [-1, 0],
//         [0, 1],
//         [1, 0],
//         [0, -1],
//     ];

//     const go = (x, y, k) => {
//         if (board[x][y] !== word[k]) return false;
//         if (k === word.length - 1) return true;

//         board[x][y] = "*"; // mark as visited
//         for (const [dx, dy] of dirs) {
//             const i = x + dx;
//             const j = y + dy;
//             if (i >= 0 && i < h && j >= 0 && j < w) {
//                 if (go(i, j, k + 1)) return true;
//             }
//         }
//         board[x][y] = word[k]; // reset
//         return false;
//     };

//     for (let i = 0; i < h; i++) {
//         for (let j = 0; j < w; j++) {
//             if (go(i, j, 0)) return true;
//         }
//     }

//     return false;
// };
