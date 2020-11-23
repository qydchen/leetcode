// In this problem, a tree is an undirected graph that is connected and has no cycles.

// The given input is a graph that started as a tree with N nodes (with distinct values 1, 2, ..., N),
// with one additional edge added. The added edge has two different vertices chosen from 1 to N,
// and was not an edge that already existed.

// The resulting graph is given as a 2D-array of edges. Each element of edges is a pair [u, v] with u < v,
// that represents an undirected edge connecting nodes u and v.

// Return an edge that can be removed so that the resulting graph is a tree of N nodes.
// If there are multiple answers, return the answer that occurs last in the given 2D-array.
// The answer edge [u, v] should be in the same format, with u < v.

// Example 1:
// Input: [[1,2], [1,3], [2,3]]
// Output: [2,3]
// Explanation: The given undirected graph will be like this:
//   1
//  / \
// 2 - 3
// Example 2:
// Input: [[1,2], [2,3], [3,4], [1,4], [1,5]]
// Output: [1,4]
// Explanation: The given undirected graph will be like this:
// 5 - 1 - 2
//     |   |
//     4 - 3

class UnionFind {
  constructor(size) {
    this.p = Array(size + 1)
      .fill()
      .map((_, i) => i);
  }

  find(x) {
    if (this.p[x] !== x) this.p[x] = this.find(this.p[x]);
    return this.p[x];
  }

  union(x, y) {
    x = this.find(x);
    y = this.find(y);
    if (x === y) {
      return false;
    }
    this.p[x] = y;
    return true;
  }
}

const findRedundantConnection = function (edges) {
  const uf = new UnionFind(edges.length);
  for (let [u, v] of edges) {
    if (!uf.union(u, v)) {
      return [u, v];
    }
  }
};

const input = [
  [1, 2],
  [1, 3],
  [2, 3],
];

const output = [2, 3];

const input1 = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 4],
  [1, 5],
];

const output1 = [1, 4];
console.log(findRedundantConnection(input));
console.log(findRedundantConnection(input1));

const input2 = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 5],
  [5, 6],
  [6, 7],
];

console.log(findRedundantConnection(input2));
