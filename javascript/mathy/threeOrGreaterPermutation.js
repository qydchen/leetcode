// Given a string, return all permutations of size 3 or greater.
// So for example: Given "abc123"
// return [abc, acb, bac, bca, cab, cba, ab1, a1b, ... , abc1, a1bc, ab1c, ... , abc123]

function threeOrGreaterPermutation(str) {
  const split = str.split("");
  const ans = permutations(split);
  return ans.map((a) => a.join(""));
}

function permutations(arr) {
  // O(n!) time | O(n!) space
  if (arr.length === 0) return [[]];
  let perms = [];
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    let current = arr[i];
    let left = arr.slice(0, i);
    let right = arr.slice(i + 1);
    let p = permutations([...left, ...right]); // O(n!)
    perms = [
      ...p.filter((a) => a.length > 2), // O(n)
      ...perms,
      ...p.map((a) => [current, ...a]), // O(n)
    ];
  }
  return perms;
}

console.log(JSON.stringify(threeOrGreaterPermutation("abc123")));
