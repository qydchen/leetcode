/*
    Write a function that takes in an array of unique integers and returns
    an array of all permutations of those integers in no particular order.

    If the input array is empty, the function should return an empty array.

    array = [1,2,3]

    [1,2,3][1,3,2][2,1,3][2,3,1][3,1,2][3,2,1]
*/

// Upper Bound: O(n^2*n!) time | O(n*n!) space
// Roughtly: O(n*n!) time | O(n*n!) space
function permutations(arr) {
  const permutations = [];
  permute(arr, [], permutations);
  return permutations;
}

function permute(arr, currentPermutation, permutations) {
  if (!arr.length && currentPermutation.length) {
    permutations.push(currentPermutation);
  } else {
    for (let i = 0; i < arr.length; i += 1) {
      const newArray = arr.slice(0, i).concat(arr.slice(i + 1));
      const newPerm = currentPermutation.concat([arr[i]]);
      permute(newArray, newPerm, permutations);
    }
  }
}

/*
[]
[1]
[1,2]
[1,3]
[1,2,3]
[1,3,2]
*/
// console.log(permutations([1, 2, 3]));
// permutations([1, 2, 3]);

function permutations2(arr) {
  if (!arr.length) return [[]];
  let perms = [];
  for (let i = 0; i < arr.length; i += 1) {
    let current = arr[i];
    let left = arr.slice(0, i);
    let right = arr.slice(i + 1);
    let perm = permutations2([...left, ...right]);
    perms = [...perms, ...perm.map((p) => [current].concat(p))];
  }
  return perms;
}

console.log(permutations2([1, 2, 3]));
// console.log(permutations2("abc123".split("")));