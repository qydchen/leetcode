// You are given an m x n binary matrix image where 0 represents a white pixel and 1 represents a black pixel.

// The black pixels are connected (i.e., there is only one black region). Pixels are connected horizontally and vertically.

// Given two integers x and y that represents the location of one of the black pixels, return the area of the smallest (axis-aligned) rectangle that encloses all black pixels.

// You must write an algorithm with less than O(mn) runtime complexity

// Example 1:

// Input: image = [["0","0","1","0"],["0","1","1","0"],["0","1","0","0"]], x = 0, y = 2
// Output: 6
// Example 2:

// Input: image = [["1"]], x = 0, y = 0
// Output: 1

// Constraints:

// m == image.length
// n == image[i].length
// 1 <= m, n <= 100
// image[i][j] is either '0' or '1'.
// 0 <= x < m
// 0 <= y < n
// image[x][y] == '1'.
// The black pixels in the image only form one component.

/**
 * @param {character[][]} image
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

var minArea = function (image, x, y) {
  let queue = [];
  let left = y,
    right = y,
    top = x,
    bottom = x;
  queue.push([x, y]);
  let visited = new Set();
  visited.add(`${x},${y}`);
  while (queue.length > 0) {
    let [currX, currY] = queue.shift();
    if (image[currX][currY] !== "1") continue;
    bottom = Math.max(bottom, currX);
    top = Math.min(top, currX);
    right = Math.max(right, currY);
    left = Math.min(left, currY);
    queue.push(...makeNextCoords([currX, currY], image, visited));
  }
  return (right - left + 1) * (bottom - top + 1);
};

const makeNextCoords = ([x, y], img, visited) => {
  const coords = [];
  if (x - 1 >= 0 && !visited.has(`${x - 1},${y}`)) {
    coords.push([x - 1, y]);
  }
  if (y - 1 >= 0 && !visited.has(`${x},${y - 1}`)) {
    coords.push([x, y - 1]);
  }
  if (x + 1 < img.length && !visited.has(`${x + 1},${y}`)) {
    coords.push([x + 1, y]);
  }
  if (y + 1 < img[0].length && !visited.has(`${x},${y + 1}`)) {
    coords.push([x, y + 1]);
  }
  for (let [currX, currY] of coords) {
    visited.add(`${currX},${currY}`);
  }
  return coords;
};
