const assert = require('assert');
/* Given a binary tree, find the length of the longest path where each node in the path has the same value.
This path may or may not pass through the root.
Note: The length of path between two nodes is represented by the number of edges between them.
Example 1:
Input:
     5
    / \
   4   5
  / \   \
 1   1   5
Output: 2
Example 2:
Input:
     1
    / \
   4   5
  / \   \
 4   4   5
Output: 2
Note: The given binary tree has not more than 10000 nodes.The height of the tree is not more than 1000. */
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

const longestUnivaluePath = tree => {
    let longest = 0;
    const traverse = (node) => {
        if (!node) return 0;
        const leftP = traverse(node.left), rightP = traverse(node.right);
        const left = node.left && node.val === node.left.val ? leftP + 1 : 0;
        const right = node.right && node.val === node.right.val ? rightP + 1 : 0;
        longest = Math.max(longest, left + right);
        return Math.max(left, right);
    }
    traverse(tree);
    return longest;
}

const tree1 = new TreeNode(5);
tree1.left = new TreeNode(4);
tree1.right = new TreeNode(5);
tree1.left.left = new TreeNode(1);
tree1.left.right = new TreeNode(1);
tree1.right.right = new TreeNode(5);

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(4);
tree2.right = new TreeNode(5);
tree2.left.left = new TreeNode(4);
tree2.left.right = new TreeNode(4);
tree2.right.right = new TreeNode(5);

// assert.equal(longestUnivaluePath(tree1), 2);
assert.equal(longestUnivaluePath(tree2), 2);
