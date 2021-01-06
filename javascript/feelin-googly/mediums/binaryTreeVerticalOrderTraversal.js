/* Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from left to right.

Examples 1:

Input: [3,9,20,null,null,15,7]

   3
  /\
 /  \
 9  20
    /\
   /  \
  15   7 

Output:

[
  [9],
  [3,15],
  [20],
  [7]
]
Examples 2:

Input: [3,9,8,4,0,1,7]

     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7 

Output:

[
  [4],
  [9],
  [3,0,1],
  [8],
  [7]
]
Examples 3:

Input: [3,9,8,4,0,1,7,null,null,null,2,5] (0's right child is 2 and 1's left child is 5)

     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7
    /\
   /  \
   5   2

Output:

[
  [4],
  [9,5],
  [3,0,1],
  [8,2],
  [7]
] */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
const verticalOrder = function (root) {
  if (!root) return [];
  let columnMap = {};
  const mid = getDistanceFromLeft(root);
  populateColumnMap(root, columnMap, mid);
  let arr = [];
  for (let colIdx in columnMap) {
    arr[colIdx] = columnMap[colIdx]
      .sort((a, b) => a.depth - b.depth)
      .map(({ val }) => val);
  }
  return arr;
};

const getDistanceFromLeft = (node) => {
  if (!node) return -1;
  return Math.max(
    getDistanceFromLeft(node.left) + 1,
    getDistanceFromLeft(node.right) - 1
  );
};

const populateColumnMap = (node, map, idx, depth = 0) => {
  if (!node) return;
  if (!map[idx]) {
    map[idx] = [{ val: node.val, depth }];
  } else {
    map[idx].push({ val: node.val, depth });
  }
  populateColumnMap(node.left, map, idx - 1, depth + 1);
  populateColumnMap(node.right, map, idx + 1, depth + 1);
};

//      3
//     /\
//    /  \
//    9   8
//   /\  /\
//  /  \/  \
//  4  01   7
//     /\
//    /  \
//    5   2

const root = new Node(3);
const nine = new Node(9);
const eight = new Node(8);
const four = new Node(4);
const zero = new Node(0);
const one = new Node(1);
const five = new Node(5);
const two = new Node(2);
const seven = new Node(7);

root.left = nine;
root.right = eight;
nine.left = four;
nine.right = zero;
zero.right = two;
eight.left = one;
eight.right = seven;
one.left = five;

console.log(verticalOrder(root)); // [[4], [9, 5], [3, 0, 1], [8, 2], [7]];
