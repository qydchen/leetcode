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
