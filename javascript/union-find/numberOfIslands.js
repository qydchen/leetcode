/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
An island is surrounded by water and is formed by connecting adjacent lands horizontally
or vertically. You may assume all four edges of the grid are all surrounded by water.
*/
// Input: grid = [
//     ["1", "1", "1", "1", "0"],
//     ["1", "1", "0", "1", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "0", "0", "0"],
// ];
// Output: 1;

// Input: grid = [
//     ["1", "1", "0", "0", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "1", "0", "0"],
//     ["0", "0", "0", "1", "1"],
// ];
// Output: 3;

const grid1 = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
];

const grid2 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
];

const numberOfIslands = (grid) => {
    const visited = Array(grid.length)
        .fill()
        .map((_, i) => Array(grid[i].length).fill(false));
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (traverse(grid, i, j, visited) > 0) {
                count++;
            }
        }
    }
    return count;
};

const traverse = (grid, i, j, visited) => {
    if (i >= grid.length || i < 0) return 0;
    if (j >= grid[i].length || j < 0) return 0;
    if (visited[i][j]) return 0;
    let curr = grid[i][j];
    if (curr === "1") {
        visited[i][j] = true;
        let bot = traverse(grid, i + 1, j, visited);
        let top = traverse(grid, i - 1, j, visited);
        let rig = traverse(grid, i, j + 1, visited);
        let lef = traverse(grid, i, j - 1, visited);
        return bot + top + rig + lef + 1;
    }
    return 0;
};

// console.log(numberOfIslands(grid1));
// console.log(numberOfIslands(grid2));

class UnionFind {
    constructor(grid) {
        this.count = 0;
        this.parent = Array(grid.length * grid[0].length);
        this.rank = Array(grid.length * grid[0].length);
        for (let i = 0; i < grid.length; i++) {
            const colCount = grid[i].length;
            for (let j = 0; j < colCount; j++) {
                if (grid[i][j] === "1") {
                    this.parent[i * colCount + j] = i * colCount + j;
                    this.count++;
                }
                this.rank[i * colCount + j] = 0;
            }
        }
    }
    find(i) {
        if (this.parent[i] !== i) this.parent[i] = this.find(this.parent[i]);
        return this.parent[i];
    }
    union(x, y) {
        const [rootx, rooty] = [this.find(x), this.find(y)];
        if (rootx != rooty) {
            if (this.rank[rootx] > this.rank[rooty]) {
                this.parent[rooty] = rootx;
            } else if (this.rank[rootx] < this.rank[rooty]) {
                this.parent[rootx] = rooty;
            } else {
                this.parent[rooty] = rootx;
                this.rank[rootx] += 1;
            }
            this.count--;
        }
        console.log(this.rank);
        console.log(this.parent);
    }
    getCount() {
        return this.count;
    }
}

const numberOfIslands2 = (grid) => {
    const uf = new UnionFind(grid);
    const rowCount = grid.length;
    for (let i = 0; i < rowCount; i++) {
        const colCount = grid[i].length;
        for (let j = 0; j < colCount; j++) {
            if (grid[i][j] === "1") {
                grid[i][j] = "0";
                // Look up
                if (i - 1 >= 0 && grid[i - 1][j] === "1") {
                    uf.union(i * colCount + j, (i - 1) * colCount + j);
                }
                // Look down
                if (i + 1 < rowCount && grid[i + 1][j] === "1") {
                    uf.union(i * colCount + j, (i + 1) * colCount + j);
                }
                // Look left
                if (j - 1 >= 0 && grid[i][j - 1] === "1") {
                    uf.union(i * colCount + j, i * colCount + j - 1);
                }
                // Look right
                if (j + 1 < colCount && grid[i][j + 1] === "1") {
                    uf.union(i * colCount + j, i * colCount + j + 1);
                }
            }
        }
    }
    return uf.getCount();
};

// console.log(numberOfIslands2(grid1));
console.log(numberOfIslands2(grid2));
