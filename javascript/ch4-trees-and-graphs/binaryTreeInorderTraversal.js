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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let ans = [];
  recurse(root, ans);
  return ans;
};

const recurse = (n, ans) => {
  if (!n) return;
  if (n.left) recurse(n.left, ans);
  ans.push(n.val);
  if (n.right) recurse(n.right, ans);
}