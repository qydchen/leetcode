class SuffixTrie {
    constructor(string) {
        this.root = {};
        this.endSymbol = "*";
        this.populateSuffixTrieFrom(string);
    }

    // O(n^2) time where n is the length of the constructor string
    // O(n^2) space
    populateSuffixTrieFrom(string) {
        for (let i = 0; i < string.length; i += 1) {
            let node = this.root;
            for (let j = i; j < string.length; j += 1) {
                const char = string[j];
                if (!node[char]) {
                    node[char] = {};
                }
                node = node[char];
            }
            node[this.endSymbol] = true;
        }
    }

    // O(m) time where m is the input string
    // O(1) space
    contains(string) {
        let search = this.root;
        for (let i = 0; i < string.length; i += 1) {
            if (!search[string[i]]) {
                return false;
            } else {
                search = search[string[i]];
            }
        }
        return !!search[this.endSymbol];
    }
}

const suffixTrie = new SuffixTrie("gangstas");
console.log(suffixTrie.contains("gangs"));
console.log(suffixTrie.contains("sta"));
console.log(suffixTrie.contains("as"));
console.log(suffixTrie.contains("gstas"));
console.log(suffixTrie.contains("gsta"));
console.log(suffixTrie.contains("angstas"));
