// How many ways can you travel to the goal on a grid with dimensions m * n traveling only down or right

const gridTraveler = (m, n, memo = {}) => {
    const k = `${m},${n}`;
    if (k in memo) return memo[k];
    if (m === 0 || n === 0) {
        return 0;
    }
    if (m === 1 && n === 1) {
        return 1;
    }
    memo[k] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[k];
};

console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 3));
