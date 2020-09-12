function riverSizes(matrix) {
    const visited = matrix.map((row) => row.map(() => false));
    const result = [];

    const traverse = (i, j, maxY, maxX) => {
        if (i > maxY || i < 0) return 0;
        if (j > maxX || j < 0) return 0;
        if (visited[i][j] === true) return 0;
        visited[i][j] = true;
        if (matrix[i][j] === 1) {
            const up = traverse(i + 1, j, maxY, maxX);
            const down = traverse(i - 1, j, maxY, maxX);
            const left = traverse(i, j - 1, maxY, maxX);
            const right = traverse(i, j + 1, maxY, maxX);
            return 1 + up + down + left + right;
        } else {
            return 0;
        }
    };

    for (let i = 0; i < matrix.length; i += 1) {
        const row = matrix[i];
        for (let j = 0; j < row.length; j += 1) {
            if (visited[i][j] === true) {
                continue;
            }
            const val = traverse(i, j, matrix.length - 1, row.length - 1);
            if (val > 0) {
                result.push(val);
            }
        }
    }

    return result;
}

const t = [
    [1, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1],
];

const u = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0],
];
console.log(riverSizes(t));
console.log(riverSizes(u));

// function riverSizes(matrix) {
//     const visited = matrix.map((row) => row.map(() => false));
//     const result = [];

//     const traverse = (rowIdx, colIdx, maxY, maxX) => {
//         if (rowIdx > maxY || rowIdx < 0) return 0;
//         if (colIdx > maxX || colIdx < 0) return 0;
//         visited[rowIdx][colIdx] = true;
//         if (matrix[rowIdx][colIdx] === 1) {
//             return (
//                 1 +
//                 traverse(rowIdx + 1, colIdx, maxY, maxX) +
//                 traverse(rowIdx, colIdx + 1, maxY, maxX)
//             );
//             +traverse(rowIdx, colIdx - 1, maxY, maxX);
//             +traverse(rowIdx - 1, colIdx, maxY, maxX);
//         } else {
//             return 0;
//         }
//     };

//     for (let i = 0; i < matrix.length; i += 1) {
//         const row = matrix[i];
//         for (let j = 0; j < row.length; j += 1) {
//             if (visited[i][j]) continue;
//             const val = traverse(i, j, matrix.length - 1, row.length - 1);
//             if (val > 0) {
//                 result.push(val);
//             }
//         }
//     }

//     return result;
// }
