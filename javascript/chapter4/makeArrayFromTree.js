// Given a BST and two nodes, find the most recent ancestor of the two nodes.
// O(log n) time. log n traversal and log n length of the arrays
// O(log n) space. creating the array is log n

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function makeArray(root, target, arr = []) {
  if (!root || !target) return [];
  if (root === target) {
    return arr.concat(target);
  } else {
    arr.push(root);
    if (target.val < root.val) {
      return makeArray(root.left, target, arr);
    } else {
      return makeArray(root.right, target, arr);
    }
  }
}

function findMostRecentAncestor(tree, node1, node2) {
  if (!node1 || !node2) return null;
  const arr1 = makeArray(tree, node1);
  const arr2 = makeArray(tree, node2);
  const iterable = arr1.length > arr2.length ? arr1 : arr2
  for (let i = 0; i < iterable.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return arr1[i - 1];
    }
  }
  return null;
}

let one = new TreeNode(1);
let two = new TreeNode(2);
let four = new TreeNode(4);
let five = new TreeNode(5);
let seven = new TreeNode(7);
let eleven = new TreeNode(11);
let fourteen = new TreeNode(14);
let sixteen = new TreeNode(16);
let seventeen = new TreeNode(17);

const tree = seven;
tree.left = four;
tree.right = fourteen;
tree.left.left = two;
tree.left.right = five;
tree.right.left = eleven;
tree.right.right = seventeen;
tree.left.left.left = one;
tree.right.right.left = sixteen;

// console.log(makeArray(tree, sixteen));
// console.log(makeArray(tree, eleven));

console.log(findMostRecentAncestor(tree, sixteen, eleven)) // => node fourteen
console.log(findMostRecentAncestor(tree, null, null)) // => null
console.log(findMostRecentAncestor(tree, seventeen, five)) // => node seven
console.log(findMostRecentAncestor(tree, two, five)); // node 4
