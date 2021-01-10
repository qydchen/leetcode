// Given two non-empty binary trees s and t, check whether tree t has exactly the same structure
// and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all
// of this node's descendants. The tree s could also be considered as a subtree of itself.

// Example 1:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
// Given tree t:
//    4
//   / \
//  1   2
// Return true, because t has the same structure and node values with a subtree of s.

// Example 2:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
//     /
//    0
// Given tree t:
//    4
//   / \
//  1   2
// Return false.

const isSubtree = function (s, t) {
  let root = findRoot(s, t);
  if (!root) return false;
  let queue = [s];
  while (queue.length) {
    let curr = queue.shift();
    if (check(curr, t)) return true;
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return false;
};

const findRoot = (s, t) => {
  if (!s) return s;
  if (s.val === t.val) return s;
  return findRoot(s.left, t) || findRoot(s.right, t);
};

const check = (root, t) => {
  if (!root && !t) return true;
  if ((!root && t) || (root && !t)) return false;
  if (root.val !== t.val) return false;
  let checkLeft = check(root.left, t.left);
  let checkRight = check(root.right, t.right);
  return checkLeft && checkRight && root.val === t.val;
};
