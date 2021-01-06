// Given a binary tree, return the vertical order traversal of its nodes values.
// For each node at position (X, Y), its left and right children respectively will
//  be at positions (X-1, Y-1) and (X+1, Y-1).
// Running a vertical line from X = -infinity to X = +infinity, whenever the
// vertical line touches some nodes, we report the values of the nodes in order
// from top to bottom (decreasing Y coordinates).
// If two nodes have the same position, then the value of the node that is reported
// first is the value that is smaller.
// Return an list of non-empty reports in order of X coordinate.  Every report will have a list of values of nodes.

// Input: [3,9,20,null,null,15,7]
// Output: [[9],[3,15],[20],[7]]
// Explanation:
// Without loss of generality, we can assume the root node is at position (0, 0):
// Then, the node with value 9 occurs at position (-1, -1);
// The nodes with values 3 and 15 occur at positions (0, 0) and (0, -2);
// The node with value 20 occurs at position (1, -1);
// The node with value 7 occurs at position (2, -2).

// Input: [1,2,3,4,5,6,7]
// Output: [[4],[2],[1,5,6],[3],[7]]
// Explanation:
// The node with value 5 and the node with value 6 have the same position according to the given scheme.
// However, in the report "[1,5,6]", the node value of 5 comes first since 5 is smaller than 6.
// This is a bit gimmicky problem as it has a small edge case
// For a more general solution, see binaryTreeVerticalOrderTraversal.js
const verticalTraversal = function (root) {
  const nodeInfos = []; // holds the x, y, & val information of each node traversed

  getNodeInfos(root, 0, 0);

  // sort by the following order of importance:
  //  1. x - coordinate
  //  2. y - coordinate precedence given to higher value
  //  3. node val in ascending order

  nodeInfos.sort((a, b) => a[0] - b[0] || b[1] - a[1] || a[2] - b[2]);

  const map = new Map();

  for (const [x, y, val] of nodeInfos) {
    if (!map.has(x)) map.set(x, []);
    map.get(x).push(val);
  }

  return [...map.values()];

  function getNodeInfos(node, x, y) {
    if (node) {
      getNodeInfos(node.left, x - 1, y - 1); // traverse left
      nodeInfos.push([x, y, node.val]);
      getNodeInfos(node.right, x + 1, y - 1); // traverse right
    }
  }
};
