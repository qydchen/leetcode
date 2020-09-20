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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */

const TreeNode = require("../../basics/tree");

// Do a postorder traversal
// As you traverse, check if the node is set for deletion.
// If the node is set for deletion, set the node's val to null,
// AND also push its left and right nodes to the forest, if there are any

// As the traversal goes back up to the parent node
// The parent node checks its left and right node's values
// If the left/right value is null, then remove the pointer by setting the left/right to null

// O(N) time complexity, where N is the number of nodes to traverse
// O(N) space, due to call stack

var delNodes = function (root, to_delete) {
    let forest = !to_delete.includes(root.val) ? [root] : [];
    postOrderPrint(root, to_delete, forest);
    return forest;
};

const postOrderPrint = (node, to_delete, forest) => {
    if (!node) return;
    postOrderPrint(node.left, to_delete, forest);
    postOrderPrint(node.right, to_delete, forest);
    if (node.left && !node.left.val) {
        node.left = null;
    }
    if (node.right && !node.right.val) {
        node.right = null;
    }
    if (to_delete.includes(node.val)) {
        node.val = null;
        if (node.left) {
            forest.push(node.left);
        }
        if (node.right) {
            forest.push(node.right);
        }
    }
};

const nodes = [1, 2, 3, 4, 5, 6, 7].map((n) => new TreeNode(n));
nodes[0].left = nodes[1];
nodes[0].right = nodes[2];
nodes[1].left = nodes[3];
nodes[1].right = nodes[4];
nodes[2].left = nodes[5];
nodes[2].right = nodes[6];

const answer = delNodes(nodes[0], [3, 5]); //[[1,2,null,4],[6],[7]]
let mapped = answer.map((root) => {
    let ans = [];
    let queue = [root];
    while (queue.length) {
        const { val, left, right } = queue.shift();
        ans.push(val);
        if (left) queue.push(left);
        if (right) queue.push(right);
    }
    return ans;
});
console.log(mapped);
