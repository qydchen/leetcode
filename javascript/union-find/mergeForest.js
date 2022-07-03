const forest = [
    [1, 2, 3, 4],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
    [6, 7],
    [11, 12, 13],
];

// [1,2,3,4,5,6,7,8,9,10]

const mergeForest = (forest) => {
  const max = Math.max(...forest.flat());
  const P = Array(max + 1)
    .fill()
    .map((_, i) => i);
  //   console.log(P);
  const find = (i) => {
    if (P[i] === i) return i;
    return (P[i] = find(P[i]));
  };
  const union = (x, y) => {
    let i = find(x);
    let j = find(y);
    if (i === j) {
      return false;
    }
    P[i] = j;
    return true;
  };
  for (let tree of forest) {
    for (let i = 0; i < tree.length - 1; i++) {
      union(tree[i], tree[i + 1]);
    }
  }
};

mergeForest(forest);

// mergeForest([[1, 2, 3]]);

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
console.log(currentSet, longest);
return longest;