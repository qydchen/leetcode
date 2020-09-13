/*

Given a 2d array of distinct integers and a target integer, Each row in the matrix is sorted,
and each column is also sorted; the matrix doesn't necessarily have the same height and width.

Write a function that returns an array of the row and column indices of the target integer if its contained
in the matrix, otherwise [-1, 1]

matrix = [
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004]
]
*/

// O(n) time to search each element
// O(n + v) where n is each element in visited and v is the recursive call
function searchInSortedMatrix(matrix, target) {
    if (!matrix.length) return [-1, -1];
    const visited = new Array(matrix.length).fill().map((_, i) => {
        return new Array(matrix[i].length).fill(false);
    });
    const found = [-1, -1];
    traverse(matrix, target, found, visited);
    return found;
}

const traverse = (matrix, target, found, visited, pos = [0, 0]) => {
    const [i, j] = pos;
    if (i < 0 || j < 0 || i > matrix.length - 1 || j > matrix[i].length - 1)
        return;
    if (visited[i][j]) return;
    visited[i][j] = true;
    if (matrix[i][j] === target) {
        found[0] = i;
        found[1] = j;
        return;
    } else {
        traverse(matrix, target, found, visited, [i + 1, j]);
        traverse(matrix, target, found, visited, [i, j + 1]);
    }
};

const matrix = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004],
];
console.log(searchInSortedMatrix(matrix, 44));
// console.log(searchInSortedMatrix(matrix, 2));
// console.log(searchInSortedMatrix(matrix, 7));
// console.log(searchInSortedMatrix(matrix, 1003));

/* better solution
We need to leverage the fact that the array is sorted
We can start at the first row index, and the last column index.
*/

// O(n + m) time | O(1) space
function searchInSortedMatrix(matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] > target) {
            col--;
        } else if (matrix[row][col] < target) {
            row++;
        } else {
            return [row, col];
        }
    }
    return [-1, -1];
}
