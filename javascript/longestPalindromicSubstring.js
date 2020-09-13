// Brutish solution
// function longestPalindrome(s) {
//   let longest = '';
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1 + longest.length; j <= s.length; j++) {
//       let substring = s.slice(i,j);
//       if (isPalindrome(substring)) {
//         longest = substring;
//       }
//     }
//   }
//   return longest;
// }
//
// let isPalindrome = (s) => {
//   for (let i = 0; i < Math.floor(s.length/2); i++) {
//     if (s[i] !== s[s.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// Better Solution
// Traverse through every character, and expand left to right
// O(n^2) time
// O(n) space
function longestPalindrome(s) {
    let start = 0,
        end = 0;
    for (let i = 0; i < s.length; i++) {
        let odd = expand(s, i, i);
        let even = expand(s, i, i + 1);
        // console.log("odd is ", odd);
        // console.log("even is ", even);
        let len = Math.max(odd, even);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
        // console.log("-----");
    }
    return s.slice(start, end + 1);
}

function expand(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        // console.log(right, left, s[left], s[right]);
        left--;
        right++;
    }
    return right - left - 1;
}

// console.log(
//     longestPalindrome(
//         "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
//     )
// );
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("abaxyzzyxf"));
console.log(longestPalindrome("racecarpepe"));
