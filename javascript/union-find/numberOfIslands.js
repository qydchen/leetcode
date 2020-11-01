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
    parent = [];
    rank = [];
    constructor(grid) {
        this.count = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === "1") {
                    this.parent[i * grid[i].length + j] =
                        i * grid[i].length + j;
                    this.count++;
                }
                this.rank[i * grid[i].length + j] = 0;
            }
        }
    }
    find(i) {
        if (this.parent[i] !== i) this.parent[i] = this.find(this.parent[i]);
        return this.parent[i];
    }
    union(x, y) {
        const rootx = this.find(x);
        const rooty = this.find(y);
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
    }
    getCount() {
        return this.count;
    }
}

const numberOfIslands2 = (grid) => {
    if (grid === null || grid.length === 0) return 0;
    const unionFind = new UnionFind(grid);
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                grid[i][j] = "0";
                if (i - 1 >= 0 && grid[i - 1][j] === "1") {
                    unionFind.union(
                        i * grid[i].length + j,
                        (i - 1) * grid[i].length + j
                    );
                }
                if (i + 1 < grid.length && grid[i + 1][j] === "1") {
                    unionFind.union(
                        i * grid[i].length + j,
                        (i + 1) * grid[i].length + j
                    );
                }
                if (j - 1 >= 0 && grid[i][j - 1] === "1") {
                    unionFind.union(
                        i * grid[i].length + j,
                        i * grid[i].length + j - 1
                    );
                }
                if (j + 1 < grid[i].length && grid[i][j + 1] === "1") {
                    unionFind.union(
                        i * grid[i].length + j,
                        i * grid[i].length + j + 1
                    );
                }
            }
        }
    }
    return unionFind.getCount();
};

console.log(numberOfIslands2(grid1));
console.log(numberOfIslands2(grid2));
//   public int numIslands(char[][] grid) {
//     if (grid == null || grid.length == 0) {
//       return 0;
//     }

//     int nr = grid.length;
//     int nc = grid[0].length;
//     int num_islands = 0;
//     UnionFind uf = new UnionFind(grid);
//     for (int r = 0; r < nr; ++r) {
//       for (int c = 0; c < nc; ++c) {
//         if (grid[r][c] == '1') {
//           grid[r][c] = '0';
//           if (r - 1 >= 0 && grid[r-1][c] == '1') {
//             uf.union(r * nc + c, (r-1) * nc + c);
//           }
//           if (r + 1 < nr && grid[r+1][c] == '1') {
//             uf.union(r * nc + c, (r+1) * nc + c);
//           }
//           if (c - 1 >= 0 && grid[r][c-1] == '1') {
//             uf.union(r * nc + c, r * nc + c - 1);
//           }
//           if (c + 1 < nc && grid[r][c+1] == '1') {
//             uf.union(r * nc + c, r * nc + c + 1);
//           }
//         }
//       }
//     }

//     return uf.getCount();
//   }

// class Solution {
//   class UnionFind {
//     int count; // # of connected components
//     int[] parent;
//     int[] rank;

//     public UnionFind(char[][] grid) { // for problem 200
//       count = 0;
//       int m = grid.length;
//       int n = grid[0].length;
//       parent = new int[m * n];
//       rank = new int[m * n];
//       for (int i = 0; i < m; ++i) {
//         for (int j = 0; j < n; ++j) {
//           if (grid[i][j] == '1') {
//             parent[i * n + j] = i * n + j;
//             ++count;
//           }
//           rank[i * n + j] = 0;
//         }
//       }
//     }

//     public int find(int i) { // path compression
//       if (parent[i] != i) parent[i] = find(parent[i]);
//       return parent[i];
//     }

//     public void union(int x, int y) { // union with rank
//       int rootx = find(x);
//       int rooty = find(y);
//       if (rootx != rooty) {
//         if (rank[rootx] > rank[rooty]) {
//           parent[rooty] = rootx;
//         } else if (rank[rootx] < rank[rooty]) {
//           parent[rootx] = rooty;
//         } else {
//           parent[rooty] = rootx; rank[rootx] += 1;
//         }
//         --count;
//       }
//     }

//     public int getCount() {
//       return count;
//     }
//   }

// }
