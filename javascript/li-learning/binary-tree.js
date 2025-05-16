class BinaryTreeNode {
  constructor(val) {
    this.left = this.left;
    this.right = this.right;
    this.val = val;
  }
}

/**
 *   a
 *  /\
 * b  c
 * /\ \
 * de  f
 *
 */

const root = new BinaryTreeNode("a");
root.left = new BinaryTreeNode("b");
root.right = new BinaryTreeNode("c");
root.left.left = new BinaryTreeNode("d");
root.left.right = new BinaryTreeNode("e");
root.right.right = new BinaryTreeNode("f");
