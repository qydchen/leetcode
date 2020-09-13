// O(w * n * log(n)) time
// O(wn) space where w is the number of words and n is the length of the longest word

function groupAnagrams(words) {
    let map = new Map();
    for (let word of words) {
        const sorted = [...word].sort().join("");
        if (!map.has(sorted)) {
            map.set(sorted, [word]);
        } else {
            map.get(sorted).push(word);
        }
    }
    return [...map.values()];
}

const words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];
console.log(groupAnagrams(words));
