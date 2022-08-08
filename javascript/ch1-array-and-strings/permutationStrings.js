// So for example: Given "abc123"
// return [abc, acb, bac, bca, cab, cba, ab1, a1b, ... , abc1, a1bc, ab1c, ... , abc123]
// Given a string, return all permutations of size 3 or greater.

function permutationStrings(str) {
  let result = [];
  for (let i = 0; i <= str.length - 3; i++) {
    for (let j = i + 3; j <= str.length; j++) {
      console.log(substrings(str));
    }
  }
  return result.flat();
}

function substrings(str) {
  if (str.length < 3) return [""];
  let res = substrings(str.slice(-1));
  let mapped = res.map((s) => s + str.at(-1));
  res = res.concat(mapped);
  return res;
}

console.log(permutationStrings("abc123"));
// get all possible substrings, then permute them
