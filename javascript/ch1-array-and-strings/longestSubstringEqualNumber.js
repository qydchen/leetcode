// Given some string having number of  '*' and '#' as its only characters find the longest
// substring which has highest number of equal number of '*' and '#'.

const longestSubstringEqualNumber = (word) => {
  let length = 0;
  let cumDiff = 0;
  let firstIndex = { 0: -1 };
  let longestString = "";
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (char === "*") {
      cumDiff += 1;
    } else if (char === "#") {
      cumDiff -= 1;
    }
    if (cumDiff in firstIndex) {
      length = Math.max(length, i - firstIndex[cumDiff]);
      longestString = word.slice(i - length + 1, i + 1);
    } else {
      firstIndex[cumDiff] = i;
    }
    console.log({ firstIndex, longestString, cumDiff, length });
  }
  return longestString;
};

console.log(longestSubstring("********#*#****###")); // #*#****###
// console.log(longestSubstring("#*")); // #*
// console.log(longestSubstring("####****"));
// console.log(longestSubstring("*#*#"));
