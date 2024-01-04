var rotate = function (matrix) {
  const n = matrix.length - 1;
  const getPos = ([row, col]) => matrix[row][col];
  for (let x = 0; x < Math.ceil(n / 2); x++) {
    for (let y = x; y < n - x; y++) {
      const yEnd = n - y;
      const xEnd = n - x;
      const topLeft = getPos([x, y]);
      const topRight = getPos([y, xEnd]);
      const botRight = getPos([xEnd, yEnd]);
      const botLeft = getPos([yEnd, x]);

      matrix[y][xEnd] = topLeft;
      matrix[xEnd][yEnd] = topRight;
      matrix[yEnd][x] = botRight;
      matrix[x][y] = botLeft;
    }
  }
};

// 3x3 matrix
// 00,02,22,20
// 01,12,21,10
// 11,11,11,11

// 4x4 matrix
// 00,03,33,30
// 01,13,32,20
// 02,23,31,10
// 11,12,22,12