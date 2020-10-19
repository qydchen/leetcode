// A heap is a tree based DS that satisfied the heap invariant
// (also called a heap property): If A is a parent node of B
// then A is ordered with respect to B for all nodes A, B in the heap

//                9
//             /     \
//            22     32
//           /  \   /  \
//         23   53 44   54
//        /  \
//       32  45

// The tree above can be represented as an array:
// [9, 22, 32, 23, 53, 44, 54, 32, 45]
//  0   1   2   3   4   5   6   7   8

// The formula for parent child relationship is in its indices.
// 23's children are 32 and 45; aka index 3 have children of idx 7, 8
// formula to get children is (2 * idx) + 1 and (2 * idx) + 2 // => 3 * 2 + 1 = 7; 3 * 2 + 2 = 8;
// formula to get parent is Math.floor((idx - 1)/ 2) // => 7 - 1 / 2 = 3; 8 - 1 / 2 = 3.5 => 3

class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array);
    }

    buildHeap(array) {}

    siftDown() {}

    siftUp() {}

    peek() {}

    remove() {}

    insert(value) {}
}

// Priority Queue
// A ADT that operates similar to a normal queue except that each element has a certain
// priority. The priority of the elements in the priority queue determine the order in which
// elements are removed from the PQ.

// Note: Priority queues only supports comparable data, meaning the data inserted into
// the priority queue must be able to be ordered in some way either from least to greatest
// or greatest to least. This is so that we are able to assign relative priorities to each element.

class PriorityQueue {
    constructor() {}

    poll() {}

    add() {}
}

// When is a PQ used?
// Used in certain implementations of Dijkstra's Shortest Path Algorithm.
// Anytime you need to dynamically fetch the 'next best' or 'next worst' element.
// Used in Huffman coding (which is often used for lossless data compression).
// BFS algorithms such as A* use PQs to continuously grab the next most promising node.
// Used by Minimum Spanning Tree Algorithms