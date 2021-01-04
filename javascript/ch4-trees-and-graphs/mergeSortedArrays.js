const assert = require("assert");

// This naive solution has a Nlog(N) time complexity
const mergeSortedArraysNaive = (arrays) => {
  return arrays.flat().sort((a, b) => a - b);
};

// Time O(nk)
const mergeSortedArrays = (arrays) => {
  const sortedList = [];
  const elementIdxs = Array(arrays.length).fill(0);
  while (true) {
    const smallestItems = [];
    for (let arrayIdx = 0; arrayIdx < arrays.length; arrayIdx++) {
      const relevantArray = arrays[arrayIdx];
      const elementIdx = elementIdxs[arrayIdx];
      if (elementIdx === relevantArray.length) continue;
      smallestItems.push({
        arrayIdx,
        num: relevantArray[elementIdx],
      });
    }
    if (smallestItems.length === 0) break;
    const nextItem = getMinValue(smallestItems);
    sortedList.push(nextItem.num);
    elementIdxs[nextItem.arrayIdx]++;
  }
  return sortedList;
  function getMinValue(items) {
    let minValueIdx = 0;
    for (let i = 1; i < items.length; i++) {
      if (items[i].num < items[minValueIdx].num) minValueIdx = i;
    }
    return items[minValueIdx];
  }
};

// Any problem that has you repeatedly look for a minimum value of maximum value in some array,
// then the problem lend itself to minheaps and maxheaps gives you the operation of finding the smallest
// or biggest in list of values in constant time, and come with very fast insertion
// and removals ( O(log n) time)

// Time O(nlog k + k)

// Make sure to ask interviewer if they really need us to code up a MinHeap implementation
const mergeSortedArraysHeap = (arrays) => {
  let sortedList = [];
  let smallestItems = [];
  for (let arrayIdx = 0; arrayIdx < arrays.length; arrayIdx++) {
    smallestItems.push({ arrayIdx, elementIdx: 0, num: arrays[arrayIdx][0] });
  }
  const minHeap = new MinHeap(smallestItems);
  while (!minHeap.isEmpty()) {
    const smallestItem = minHeap.poll();
    const { arrayIdx, elementIdx, num } = smallestItem;
    sortedList.push(num);
    if (elementIdx === arrays[arrayIdx].length - 1) continue;
    minHeap.insert({
      arrayIdx,
      elementIdx: elementIdx + 1,
      num: arrays[arrayIdx][elementIdx + 1],
    });
  }
  return sortedList;
};

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }

  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;
      if (childTwoIdx !== -1 && heap[childTwoIdx].num < heap[childOneIdx].num) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }
      if (heap[idxToSwap].num < heap[currentIdx].num) {
        [heap[currentIdx], heap[idxToSwap]] = [
          heap[idxToSwap],
          heap[currentIdx],
        ];
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx].num < heap[parentIdx].num) {
      [heap[currentIdx], heap[parentIdx]] = [heap[parentIdx], heap[currentIdx]];
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  poll() {
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    const valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }
}

const input = [
  [1, 5, 8, 21],
  [-1, 0],
  [-124, 81, 121],
  [3, 6, 12, 20, 150],
];

const output = [-124, -1, 0, 1, 3, 5, 6, 8, 12, 20, 21, 81, 121, 150];
const naiveAns = mergeSortedArraysNaive(input);
assert.deepStrictEqual(naiveAns, output);
console.log(naiveAns);

console.log("---");

const ans = mergeSortedArrays(input);
assert.deepStrictEqual(ans, output);
console.log(ans);

console.log("---");
const heapans = mergeSortedArraysHeap(input);
assert.deepStrictEqual(heapans, output);
console.log(heapans);
