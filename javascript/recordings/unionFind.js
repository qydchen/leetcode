const nums = [
  [1, 2, 3, 4],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
  [6, 7],
  [11, 12, 13],
];

// longestConsecutiveNums(nums) // => [1,2,3,4,5,6,7,8,9,10]

function longestConsecutiveNums(nums) {
  let max = Math.max(...nums.flat());
  let representative = Array(max + 1)
    .fill()
    .map((_, i) => i);

  // Path compression
  const find = (i) => {
    // O(n);
    if (representative[i] === i) return i;
    return (representative[i] = find(representative[i]));
  };

  const union = (x, y) => {
    // O(n);
    let i = find(x);
    let j = find(y);
    if (i === j) {
      return false;
    }
    representative[i] = j;
    return true;
  };

  for (let set of nums) {
    for (let i = 0; i < set.length - 1; i++) {
      union(set[i], set[i + 1]);
    }
  }

  let longest = [];
  let currentSet = [];
  for (let i = 0; i < representative.length; i++) {
    currentSet.push(i);
    if (i === representative[i]) {
      // end of the set
      if (currentSet.length > longest.length) {
        longest = currentSet;
      }
      currentSet = [];
    }
  }

  return longest;
}

// console.log(longestConsecutiveNums(nums));

const nums2 = [
  [1, 2, 3, 4],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
  [6, 7],
  [11, 12, 13],
  [100, 101, 102, 103],
  [104, 105, 106],
  [103, 104],
  [107, 108, 109, 110, 111, 112],
  [106, 107],
];

// console.log(longestConsecutiveNums(nums2));
