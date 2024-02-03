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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true;
  return recurse(root.left, root.right);
};

const recurse = (left, right) => {
  if (left == null && right == null) return true;
  if ((!left && right) || (left && !right)) return false;
  if (left.val !== right.val) return false;
  const isLLsameAsRR = recurse(left.left, right.right);
  const isLRsameAsRL = recurse(left.right, right.left);
  return isLLsameAsRR && isLRsameAsRL;
}