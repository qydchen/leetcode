// Implement a function to check if a binary tree is balanced. For the purposes of
// this question, a balanced tree is defined to be a tree such that the heights of
// the two subtrees of any node never differ by more than one.
const { ans1, ans2, ans3, ans4, ans5, TreeNode } = require('./minimalTree');

// O(n) time
// O(h) space, where h is the height of the tree
function checkHeight(root) {
  if (root === null) return -1;
  const leftHeight = checkHeight(root.left);
  if (leftHeight === Number.MIN_VALUE) return Number.MIN_VALUE;
  const rightHeight = checkHeight(root.right);
  if (rightHeight === Number.MIN_VALUE) return Number.MIN_VALUE;
  const heightDiff = leftHeight - rightHeight;
  if (Math.abs(heightDiff) > 1) {
    return Number.MIN_VALUE;
  } else {
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

function checkBalanced(tree) {
  return checkHeight(tree) !== Number.MIN_VALUE;
}


console.log(checkBalanced(ans1));
// console.log(checkBalanced(ans2));
// console.log(checkBalanced(ans3));
// console.log(checkBalanced(ans4));
// console.log(checkBalanced(ans5));
