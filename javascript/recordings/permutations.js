//Permutations

// permutations([1,2,3]);
// [3,2,1][2,3,1]   [3,1,2][1,3,2] [2,1,3][1,2,3]
//              [1,2,3]
//          1  /  2 |   3\
//          [2,3] [1,3]  [1,2]
//         2/ 3\   1/3\    1/ 2\
//         [3]  [2] [3][1]  [2]  [1]
//         3|   2|   |  |    |    |
//        [[]] [[]]  [] []   []   []

function permutations(arrayOfNums, memo = {}) {
  if (arrayOfNums.length === 0) return [[]];
  let perms = []; //  [[1,2,3]]
  for (let i = 0; i < arrayOfNums.length; i++) {
    let currentNum = arrayOfNums[i];
    let left = arrayOfNums.slice(0, i);
    let right = arrayOfNums.slice(i + 1);
    let permToPassDown = left.concat(right);
    let perm = permutations(permToPassDown); // [[3,2]]
    let mappedPerm = perm.map((subArray) => {
      let newPerm = subArray.concat(currentNum);
      let key = newPerm.map((num) => String(num)).join("");
      if (memo[key]) {
        return null;
      }
      memo[key] = newPerm;
      return memo[key];
    }); // [[1,3,2]]
    mappedPerm = mappedPerm.filter((n) => n !== null);
    perms = perms.concat(mappedPerm); // [[1,2,3]].concat([[1,3,2]]) =>  [[1,2,3],[1,3,2]]
  }
  return perms;
}

// console.log(permutations([1, 2, 3, 1, 2, 3]));

//Subsets
// console.log(subsets([1,2,3]));
//[][1][2][3][12][23][13][123]
function subsets(arr) {
  if (arr.length === 0) return [[]];
  let arrWithoutLastElement = arr.slice(0, -1); // []
  let set = subsets(arrWithoutLastElement); // [[]]
  console.log(set);
  let newSet = set.map((s) => s.concat(arr.slice(-1)));
  console.log(newSet);
  console.log(set.concat(newSet));
  console.log("---------------");
  return set.concat(newSet);
}

console.log(subsets([1, 2, 3]));

//        1 2 3
//        /
//      1 2
//   [[],[1]]
//    1
//    /
//  [[]]

//Longest Increasing Subsequence
//Largest Island
//Contiguous subarray
