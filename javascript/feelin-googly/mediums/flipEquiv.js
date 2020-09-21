/*
For a binary tree T, we can define a flip operation as follows: choose any node, and swap the left and right child subtrees.

A binary tree X is flip equivalent to a binary tree Y if and only if we can make X equal to Y after some number of flip operations.

Given the roots of two binary trees root1 and root2, return true if the two trees are flip equivelent or false otherwise
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

// O(N) time for every node
// O(N) space
var flipEquiv = function (root1, root2) {
    if (!root1 && root2) return false;
    if (root1 && !root2) return false;
    if (root1?.val !== root2?.val) return false;

    let queue1 = [root1];
    let queue2 = [root2];

    while (queue1.length && queue2.length) {
        let curr1 = queue1.shift();
        let curr2 = queue2.shift();
        if (curr1 === null && curr2 === null) {
            continue;
        }
        const { left: left1, right: right1 } = curr1;
        const { left: left2, right: right2 } = curr2;
        let flipped;
        if (left1?.val !== left2?.val && left1?.val !== right2?.val) {
            return false;
        }
        if (right1?.val !== left2?.val && right1?.val !== right2?.val) {
            return false;
        }
        if (left1?.val === right2?.val && right1?.val === left2?.val) {
            flipped = flip(curr1);
        }
        if (flipped) {
            if (flipped.left) queue1.push(flipped.left);
            if (flipped.right) queue1.push(flipped.right);
        } else {
            if (left1) queue1.push(left1);
            if (right1) queue1.push(right1);
        }
        if (left2) queue2.push(left2);
        if (right2) queue2.push(right2);
    }

    if (queue1.length || queue2.length) return false;
    return true;
};

const flip = (node) => {
    if (!node) return node;
    const { left, right } = node;
    node.left = right;
    node.right = left;
    return node;
};

var flipEquivDFS = function (root1, root2) {
    if (root1 === null && root2 === null) return true;
    if (root1 === null || root2 === null) return false;
    if (root1.val !== root2.val) return false;

    let normal =
        flipEquivDFS(root1.left, root2.left) &&
        flipEquivDFS(root1.right, root2.right);
    let flipped =
        flipEquivDFS(root1.right, root2.left) &&
        flipEquivDFS(root1.left, root2.right);
    return normal || flipped;
};
