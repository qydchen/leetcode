// Design an algorithm and write code to find the first common ancestor of two
// nodes in a graph.

// Note: I got burned by this question from a startup that was going to pay me half of what I was currently
// making at the time

// Steps
// Start an Eulerian Tour (Eulerian Circuit)  at the root node, traverse all edges, and finally return to root node
// Keep track of which nodes you visit and this will be the Euler tour, keep track of the depth as well

// 1. Find the index position value for the nodes node1 and node 2
// 2. Using the depth array, find the index of the minimum value in the range of the indices obtained in step 1
// 3. Using the index obtained in step 2, find the LCA of a and b in the nodes array

/* 
Step 1 required finding the index position for the 2 nodes.
However, an issue we soon run into is that there are 2n - 1 node index positions
in the Euler tour, and only n nodes in total, so a perfect 1 to 1 inverse mapping isn't possible
*/

//    a
//  / | \
// d  b  c
//   / |  | \
//   e f  i  g
//            \
//            h
//             \
//              x

// find lca of h and i; should return c

//             0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8
// eulerTour: [a,d,a,b,e,b,f,b,a,c,i,c,g,h,x,h,g,c,a]
// depth:     [0,1,0,1,2,1,2,1,0,1,2,1,2,3,4,3,2,1,0]

// idx positions of node h is [13, 15] and node i is [10]
// it doesnt matter which index we pick for node h
// range 10 to 15 the depth subarray = [2,1,2,3,4,3]
// the minimum is 1, and that corresponds to c, which is the LCA

class GraphNode {
    constructor(val) {
        this.val = val;
        this.children = [];
    }
}

function LCA(root, node1, node2) {
    const eulerTourNodes = [];
    const depth = [];
    let node1EulerTourIdx;
    let node2EulerTourIdx;
    let tourIndex = 0;
    const dfs = (_root, nodeDepth) => {
        if (_root === null) return null;
        if (_root === node1) {
            node1EulerTourIdx = tourIndex;
        }
        if (_root === node2) {
            node2EulerTourIdx = tourIndex;
        }
        visit(_root, nodeDepth);
        for (let child of _root.children) {
            dfs(child, nodeDepth + 1);
            visit(_root, nodeDepth);
        }
    };
    const visit = (_node, nodeDepth) => {
        eulerTourNodes[tourIndex] = _node;
        depth[tourIndex] = nodeDepth;
        tourIndex++;
    };
    dfs(root, 0);

    // This could have been optimized by using a sparse table to get constant time min
    let min = null;
    let minIdx;
    for (let i = node1EulerTourIdx; i <= node2EulerTourIdx; i += 1) {
        if (min === null || depth[i] < min) {
            min = depth[i];
            minIdx = i;
        }
    }
    return eulerTourNodes[minIdx];
}

const a = new GraphNode("a");
const b = new GraphNode("b");
const c = new GraphNode("c");
const d = new GraphNode("d");
const e = new GraphNode("e");
const f = new GraphNode("f");
const g = new GraphNode("g");
const h = new GraphNode("h");
const i = new GraphNode("i");
const x = new GraphNode("x");

a.children = [b, c, d];
b.children = [e, f];
c.children = [g, i];
g.children = [h];
h.children = [x];

console.log(LCA(a, h, i)); // c
console.log(LCA(a, e, f)); // b
console.log(LCA(a, a, a)); // a
console.log(LCA(a, g, h)); // g
