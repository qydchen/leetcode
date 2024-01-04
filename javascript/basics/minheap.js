class MinHeap {
  #elements = [];

  // Helpers
  getLeftChildIdx = (parentIdx) => 2 * parentIdx + 1;
  getRightChildIdx = (parentIdx) => 2 * parentIdx + 2;
  getParentIdx = (childIdx) => Math.floor((childIdx - 1) / 2);
  leftChild = (idx) => this.#elements[this.getLeftChildIdx(idx)];
  rightChild = (idx) => this.#elements[this.getRightChildIdx(idx)];
  parent = (idx) => this.#elements[this.getParentIdx(idx)];

  // Returns the root node in the heap
  peek = () => {
    if (this.#elements.length === 0) {
      throw Error("No elements in MinHeap");
    }
    return this.#elements.at(0);
  };

  // aka extractMin; O(log n) time | O(1) space
  poll = () => {
    if (this.#elements.length === 0) {
      throw Error("No elements in MinHeap");
    }

    let root = this.#elements[0];
    let popped = this.#elements.pop();
    // Handles case not to add to array if array length is 0 after popping
    if (this.#elements.length > 0) {
      // Take the bottom, rightmost element and add it to the root
      this.#elements[0] = popped;
    }

    // Bubble down the new root element to maintain heap order
    this.#heapifyDown();
    return root;
  };

  // O(log n) time | O(1) space
  insert = (value) => {
    this.#elements.push(value);

    // Bubble up the new element to maintain heap order
    this.#heapifyUp();
  };

  // This method swaps the child with the parent until each node is smaller
  // than its children to maintain heap ordering, by starting from the bottom
  // of the heap (aka last element of the array)
  #heapifyUp = () => {
    let idx = this.#elements.length - 1;
    while (
      this.getParentIdx(idx) >= 0 &&
      this.parent(idx) > this.#elements[idx]
    ) {
      const parentIdx = this.getParentIdx(idx);
      [this.#elements[idx], this.#elements[parentIdx]] = [
        this.#elements[parentIdx],
        this.#elements[idx],
      ];
      idx = parentIdx;
    }
  };

  // This method swaps the child with the parent until each node is smaller
  // than its children to maintain heap ordering, by starting from the top of
  // the heap (aka first element of the array)
  #heapifyDown = () => {
    // Start off at root element
    let idx = 0;
    // As long as there is a child, keep walking down
    // If there's no left child, then there is definitely no right child)
    while (this.getLeftChildIdx(idx) < this.#elements.length) {
      let smallerChildIdx = this.getLeftChildIdx(idx);
      // Right child exists and is smaller than the left child
      if (
        this.getRightChildIdx(idx) < this.#elements.length &&
        this.rightChild(idx) < this.leftChild(idx)
      ) {
        smallerChildIdx = this.getRightChildIdx(idx);
      }

      // We are done heapifyDown once parent is smaller than both its children
      if (this.#elements[idx] < this.#elements[smallerChildIdx]) {
        break;
      } else {
        // Swap the parent with the smaller child
        [this.#elements[idx], this.#elements[smallerChildIdx]] = [
          this.#elements[smallerChildIdx],
          this.#elements[idx],
        ];
      }
      idx = smallerChildIdx;
    }
  };
}
