// O (n*2^n) time | O(n*2^n) space

function subsets(arr) {
  const subsets = [];
  helper(arr, [], subsets);
  return subsets;
}

function helper(arr, currentSubset, subsets) {
  subsets.push(currentSubset);
  for (let i = 0; i < arr.length; i += 1) {
    const newSubset = currentSubset.slice().concat(arr[i]);
    helper(arr.slice(i + 1), newSubset, subsets);
  }
}

/*
[
  [],       [ 1 ],
  [ 1, 2 ], [ 1, 2, 3 ],
  [ 1, 3 ], [ 2 ],
  [ 2, 3 ], [ 3 ]
]
*/
// [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]
// console.log(JSON.stringify(subsets([1, 2, 3])));

function subsets2(arr) {
  if (arr.length === 0) {
    return [[]];
  }
  let set = subsets2(arr.slice(0, -1));
  return set.concat(set.map((s) => s.concat(arr.slice(-1))));
}

console.log(JSON.stringify(subsets2([1, 2, 3])));
