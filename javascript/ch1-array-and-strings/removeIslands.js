// Given a matrix, remove all islands in the matrix that does not touch the border of the matrix

// Time Complexity O(wh);
// Space Complexity O(wh);
function removeIslands(matrix) {
  // visit all islands touching border
  let visited = Array(matrix.length)
    .fill()
    .map((_, i) => Array(matrix[i].length).fill(false));
  for (let row = 0; row < matrix.length; row++) {
    visitBorders(row, 0);
    visitBorders(row, matrix[0].length - 1);
  }
  for (let col = 0; col < matrix[0].length; col++) {
    visitBorders(0, col);
    visitBorders(matrix.length - 1, col);
  }
  // then visit all unvisited cells and set it all to 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!visited[i][j] && matrix[i][j] === 1) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
  function visitBorders(row, col) {
    if (row < 0 || row > matrix.length - 1) return;
    if (col < 0 || col > matrix[row].length - 1) return;
    if (visited[row][col]) return;
    visited[row][col] = true;
    if (matrix[row][col] === 1) {
      visitBorders(row - 1, col);
      visitBorders(row + 1, col);
      visitBorders(row, col - 1);
      visitBorders(row, col + 1);
    }
    return;
  }
}

let matrix = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1],
];
console.log(removeIslands(matrix));

console.log(removeIslands([[]]));
console.log(removeIslands([[1]]));
console.log(removeIslands([[0, 1]]));
console.log(
  removeIslands([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
