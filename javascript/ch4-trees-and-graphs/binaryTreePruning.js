// We are given the head node root of a binary tree, where additionally every node's value is either a 0 or a 1.

// Return the same tree where every subtree (of the given tree) not containing a 1 has been removed.

// (Recall that the subtree of a node X is X, plus every node that is a descendant of X.)

// Example 1:
// Input: [1,null,0,0,1]
// Output: [1,null,0,null,1]

// Explanation:
// Only the red nodes satisfy the property "every subtree not containing a 1".
// The diagram on the right represents the answer.

// Example 2:
// Input: [1,0,1,0,0,0,1]
// Output: [1,null,1,null,1]

// Example 3:
// Input: [1,1,0,1,1,0,1,0]
// Output: [1,1,0,1,1,null,1]

// Note:

// The binary tree will have at most 200 nodes.
// The value of each node will only be 0 or 1.

class Node {
  constructor(val) {
    this.left = this.right = null;
    this.val = val;
  }
}

const pruneTree = function (root) {
  if (!root) return root;
  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);
  if (!root.left && !root.right && root.val === 0) return null;
  return root;
};

let root = new Node(1);
root.right = new Node(0);
root.right.left = new Node(0);
root.right.right = new Node(1);
console.log(pruneTree(root));

let root1 = new Node(1);
root1.right = new Node(1);
root1.right.left = new Node(0);
root1.right.right = new Node(1);
root1.left = new Node(0);
root1.left.left = new Node(0);
root1.left.right = new Node(0);
console.log(pruneTree(root1));
