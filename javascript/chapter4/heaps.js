// A min-heap is a complete binary tree (totally filled other than the rightmost
// elements on the last level) where each node is smaller than its children.
// The root, therefore, is the minimum element in the tree.

// two key operations on a min-heap: insert and extract_min

// insert O(log N): we insert at the rightmost spot so as to maintain the complete
// tree property, then fix the tree by swapping the new element with its parent
// until we find an approprite spot for the element

// extrat_min O(log N): remove the minimum element and swap it with the last element
// in the heap. Then, we bubble down this element, swapping it with one of rightmost
// children until the heap property is restored


// REVIEW THIS
class HeapNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = this.parent = null;
  }
}

class MinHeap {
  constructor(root) {
    this.root = root;
  }

  insert(node) {
    if (this.root === null) {
      return this.root = node;
    }
    const queue = [this.root];
    while (queue.length !== 0) {
      let {left, right} = queue[0];
      if (left === null) {
        return queue[0].left = node;
      } else {
        queue.push(left);
      }
      if (right === null) {
        return queue[0].right = node;
      } else {
        queue.push(right);
      }
      queue.shift();
    }
  }

  inOrderPrint() {
    this._inOrderPrint(this.root);
  }

  _inOrderPrint(node) {
    if (node) {
      this._inOrderPrint(node.left);
      console.log(node.val);
      this._inOrderPrint(node.right);
    }
  }
}

let heap = new MinHeap(null);
heap.insert(new HeapNode(7))
heap.insert(new HeapNode(5))
heap.insert(new HeapNode(2))
heap.inOrderPrint();
