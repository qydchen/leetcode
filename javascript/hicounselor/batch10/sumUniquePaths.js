function sumOfSumOfMatrix(matrix) {
  return dfsMatrix(0, 0, matrix, matrix[0][0]); // 1
}

function dfsMatrix(i, j, matrix, curr) {
  // curr = 1 // curr = 4 // curr = 8
  if (i > matrix.length - 1 || j > matrix[0].length - 1) return 0;
  if (i === matrix.length - 1 && j === matrix[0].length - 1) return curr;
  let down = i + 1 < matrix.length ? matrix[i + 1][j] : 0;
  let right = j + 1 < matrix[0].length ? matrix[i][j + 1] : 0;
  return (
    dfsMatrix(i + 1, j, matrix, curr + down) + // 4 + 0
    dfsMatrix(i, j + 1, matrix, curr + right) // 4 + 4
  );
}
