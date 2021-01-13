var bstToGst = function (root) {
  let runningSum = 0,
    map = {};
  traverse(root);
  return cloneTree(root);
  function traverse(n) {
    if (!n) return;
    traverse(n.right);
    runningSum += n.val;
    map[n.val] = runningSum;
    traverse(n.left);
  }
  function cloneTree(n) {
    if (!n) return n;
    return new TreeNode(map[n.val], cloneTree(n.left), cloneTree(n.right));
  }
};
