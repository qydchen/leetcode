// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3

const isSymmetric = function (root) {
  if (!root) return true;
  const { left, right } = root;
  return checkSymmetry(left, right);
};

function checkSymmetry(root1, root2) {
  if ((root1 && !root2) || (!root1 && root2)) return false;
  if (root1 === null && root2 === null) return true;
  if (root1.val !== root2.val) return false;
  return (
    checkSymmetry(root1.left, root2.right) &&
    checkSymmetry(root1.right, root2.left)
  );
}
