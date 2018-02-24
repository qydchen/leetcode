// Given a sorted (increasing order) array with unique integer elements, write an
// algorithm to reate a binary search tree with minimal height

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function minimalTree(array) {
  if (array.length === 0) return null;
  if (array.length === 1) return new TreeNode(array[0]);
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid + 1);
  const node = new TreeNode(array[mid]);
  node.left = minimalTree(left);
  node.right = minimalTree(right);
  return node;
}

const arr1 = [1, 2, 3, 5, 6, 7, 8];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
const baseCase = [5];
const evenCase = [4, 6]
const oddCase = [1, 2, 3]

const ans1 = minimalTree(arr1) // =>
//       5
//    2     7
//  1   3  6  8

const ans2 = minimalTree(arr2) // =>
//       4
//    2     6
//  1   3  5  7
//              8

const ans3 = minimalTree(baseCase) // => 5;

const ans4 = minimalTree(evenCase) // =>
// 4
//   6

const ans5 = minimalTree(oddCase) // =>
//   2
// 1   3

function inOrderPrint(node) {
  if (node) {
    inOrderPrint(node.left);
    console.log(node.val);
    inOrderPrint(node.right);
  }
}

function preOrderPrint(node) {
  if (node) {
    console.log(node.val);
    preOrderPrint(node.left);
    preOrderPrint(node.right);
  }
}

// inOrderPrint(ans1)
// inOrderPrint(ans2)
// inOrderPrint(ans3)
// inOrderPrint(ans4)
// inOrderPrint(ans5)
