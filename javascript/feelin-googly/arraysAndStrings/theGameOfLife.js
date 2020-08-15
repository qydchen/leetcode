const makeNewGeneration = grid => {
    const newGrid = grid.map(row => row.slice()).slice();
    for (let i = 0; i < newGrid.length; i++) {
        const row = newGrid[i];
        for (let j = 0; j < row.length; j++) {
            const cell = row[j];
            const n = liveNeighbors(grid, i, j);
            if (newGrid[i][j] === 1) {
                newGrid[i][j] = (n < 2 || n > 3) ? 0 : 1;
            } else if (n === 3) {
                newGrid[i][j] = 1;
            } else {
                newGrid[i][j] = 0;
            }
        }
    }
    return newGrid;
}

const liveNeighbors = (grid, row, col) => {
    let count = 0;
    if (row !== 0) {
        count += grid[row - 1][col];
        if (col !== 0) {
            count += grid[row - 1][col - 1];
        }
        if (col !== grid[row].length - 1) {
            count += grid[row - 1][col + 1];
        }
    }
    if (row !== grid.length - 1) {
        count += grid[row + 1][col];
        if (col !== 0) {
            count += grid[row + 1][col - 1];
        }
        if (col !== grid[row].length - 1) {
            count += grid[row + 1][col + 1];
        }
    }
    if (col !== 0) {
        count += grid[row][col - 1];
    }
    if (col !== grid[row].length - 1) {
        count += grid[row][col + 1];
    }
    return count;
}

console.log(makeNewGeneration(
    [
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]]
    )
);
// [[0,0,0],
// [1,0,1],
// [0,1,1],
// [0,1,0]]
// console.log(makeNewGeneration(
//     [
//         [0, 1],
//         [0, 0],
//         [1, 1],
//     ]
// ))