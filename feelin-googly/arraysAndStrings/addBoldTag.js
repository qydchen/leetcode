// Given a string s and a list of strings dict, you need to add a closed pair of bold tag < b > and </b >
// to wrap the substrings in s that exist in dict.If two such substrings overlap, you need to wrap them together
// by only one pair of closed bold tag.Also, if two substrings wrapped by bold tags are consecutive, you need to combine them.
//     Example 1:
// Input:
// s = "abcxyz123"
// dict = ["abc", "123"]
// Output:
// "<b>abc</b>xyz<b>123</b>"
// Example 2:
// Input:
// s = "aaabbcc"
// dict = ["aaa", "aab", "bc"]
// Output:
// "<b>aaabbc</b>c"
// Note:
// The given dict won't contain duplicates, and its length won't exceed 100.
// All the strings in input have length in range[1, 1000].

/**
 * @param {string} s
 * @param {string[]} dict
 * @return {string}
 */
const addBoldTag = (s, dict) => {
    let result = "";
    let stringBuild = "";
    let indices = dict.map((str) => ({
        index: s.indexOf(str),
        len: str.length,
        str,
    }));
    indices.sort((a, b) => a.index - b.index);
    for (let i = 0; i < indices.length; i++) {
        const curr = indices[i];
        if (curr.index > -1) {
            stringBuild += curr.str;
        }
        for (let j = i + 1; j < indices.length; j++) {
            const ahead = indices[j];
            if (ahead.index <= curr.index + curr.len) {
                let math = ahead.index - (curr.index + curr.len);
                stringBuild = stringBuild.slice(0, math) + ahead.str;
            }
        }
    }
    return result;
};
