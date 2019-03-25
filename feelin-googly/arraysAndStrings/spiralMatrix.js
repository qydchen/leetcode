const assert = require('assert');
/*Given a matrix of m x n elements(m rows, n columns), return all elements of the matrix in spiral order.
Example 1:
Input:
[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
Example 2:
Input:
[
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]
Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
*/

// index for ex1: 00 01 02 12 22 21 20 10 11
// index for ex2: 00 01 02 03 13 23 22 21 20 10 11 12
const spiralOrder = (matrix) => {
    const result = [];
    const total = matrix.reduce((acc, el) => acc + el.length, 0);
    if (!matrix || matrix.length === 0) {
        return result;
    }
    let vertMax = matrix.length - 1, horizontalMax = matrix[0].length - 1, vertMin = 0, horizontalMin = 0, rowIdx = 0, colIdx = 0,
    isRowIdxDecrementing = false, isRowIdxIncrementing = false, isColIdxIncrementing = true, isColIdxDecrementing = false;
    while (result.length !== total) {
        console.log('rowIdx:', rowIdx, 'vertMax:', vertMax, 'colIdx:', colIdx, 'horizontalMax:', horizontalMax);
        console.log('vertMin:', vertMin, 'horizontalMin:', horizontalMin);
        result.push(matrix[rowIdx][colIdx]);
        if (isRowIdxIncrementing) {
            if (rowIdx < vertMax) {
                rowIdx += 1;
                continue;
            } else if (rowIdx >= vertMax) {
                isRowIdxIncrementing = false;
                isColIdxDecrementing = true;
                vertMax -= 1;
                continue;
            }
        }
        if (isColIdxIncrementing) {
            if (colIdx < horizontalMax) {
                colIdx += 1;
                continue;
            } else if (colIdx >= horizontalMax) {
                isColIdxIncrementing = false;
                isRowIdxIncrementing = true;
                horizontalMax -= 1;
                continue;
            }
        }
        if (isRowIdxDecrementing) {
            if (rowIdx > vertMin) {
                rowIdx -= 1;
                continue;
            } else if (rowIdx <= vertMin) {
                isRowIdxDecrementing = false;
                isColIdxIncrementing = true;
                vertMin += 1;
                continue;
            }
        }
        if (isColIdxDecrementing) {
            if (colIdx > horizontalMin) {
                colIdx -= 1;
                continue;
            } else if (colIdx <= horizontalMin) {
                isColIdxDecrementing = false,
                isRowIdxDecrementing = true;
                horizontalMin += 1;
                continue;
            }
        }
    }
    return result;
};

const ex1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const result1 = [1, 2, 3, 6, 9, 8, 7, 4, 5];

const ex2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
const result2 = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];

assert.deepEqual(spiralOrder(ex1), result1);
assert.deepEqual(spiralOrder(ex2), result2);