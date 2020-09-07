// Implement a function to check if a binary tree is a binary search tree.
const { ans1, ans2, ans3, ans4, ans5, TreeNode } = require("./minimalTree");
const assert = require("assert");
// We can in-order traversal and check the prior node against the current node (assuming unique numbers)

// We can pass the min and max values on each recursive call

function validateBST(node) {
    let lastPrinted = null; // encapsulate a variable outside of IIFE to track the lastPrinted element
    return (function check(node) {
        // use a named IIFE to make the recursive call
        if (node === null) return true;
        if (!check(node.left)) return false; // check / recurse left
        if (lastPrinted !== null && node.val < lastPrinted) return false;
        lastPrinted = node.val;
        if (!check(node.right)) return false; // check / recurse right
        console.log(node.val);
        return true;
    })(node);
}

let unbal = new TreeNode(5);
unbal.left = new TreeNode(3);
unbal.right = new TreeNode(10);
unbal.left.left = new TreeNode(1);
unbal.left.right = new TreeNode(42);
unbal.left.right.right = new TreeNode(42);

// console.log(validateBST(ans1)); // true
// console.log(validateBST(ans2)); // true
// console.log(validateBST(unbal)); // false

let test1 = new TreeNode(10);
test1.left = new TreeNode(5);
test1.right = new TreeNode(15);
test1.left.right = new TreeNode(10);
// solution doesnt work for this case
assert.equal(validateBST(test1), false);
