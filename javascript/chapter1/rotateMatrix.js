// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
// write a method to rotate the image by 90 degrees. Can you do this inplace?

// Solution 1: in place
// time O(n^2)
// space O(1)
// function rotateMatrix(matrix) {
//   const swap = (newRow, newCol, oldRow, oldCol) => {
//     const copy = matrix[newRow][newCol];
//     matrix[newRow][newCol] = matrix[oldRow][oldCol];
//     matrix[oldRow][oldCol] = copy;
//   }
//   for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
//     for (let colIdx = 0; colIdx < matrix.length; colIdx++) {
//       swap(rowIdx, matrix.length - 1 - colIdx, rowIdx, colIdx);
//     }
//   }
//   return matrix;
// }
// // row,col
// // 0,0   0,1,  0,2 => 0,2   1,2   2,2
// // 1,0   1,1,  1,2 => 0,1   1,1   2,1
// // 2,0   2,1,  2,2 => 0,0   1,0   2,0
// let ticTacToe = [
//   [0,1,1],
//   [0,0,0],
//   [1,0,0],
// ]
//
// let ans = rotateMatrix(ticTacToe) // =>
// // [
// //   [1,0,0],
// //   [0,0,1],
// //   [0,0,1],
// // ]
//
// // ans.forEach(console.log)
