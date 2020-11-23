// https://en.wikipedia.org/wiki/Trie

// iterates through the parents to get the word.
// time complexity: O(k), k = word length
class TrieNode {
    constructor(key) {
        this.key = key;
        this.parent = null;
        this.children = {};
        this.end = false;
    }

    getWord() {
        let output = [];
        let node = this;
        while (node !== null) {
            output.unshift(node.key);
            node = node.parent;
        }
        return output.join("");
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    // inserts a word into the trie.
    // time complexity: O(k), k = word length
    insert(word) {
        let node = this.root;
        // iterate through each character
        for (let i = 0; i < word.length; i++) {
            if (!node.children[word[i]]) {
                // create a new character node if char does not exist in trie
                node.children[word[i]] = new TrieNode(word[i]);
                // set the new character node's parent to the current node
                node.children[word[i]].parent = node;
            }
            // proceed to the next depth of the trie
            node = node.children[word[i]];
            if (i === word.length - 1) {
                // at the last character, set the node to end as a complete word
                node.end = true;
            }
        }
    }

    // check if it contains a whole word.
    // time complexity: O(k), k = word length
    contains(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            // check to see if character node exists in children.
            if (node.children[word[i]]) {
                // if it exists, proceed to the next depth of the trie.
                node = node.children[word[i]];
            } else {
                // doesn't exist, return false since it's not a valid word.
                return false;
            }
        }
        // we finished going through all the words, but is it a whole word?
        return node.end;
    }

    // returns every word with given prefix
    // time complexity: O(p + n), p = prefix length, n = number of child paths
    find(prefix) {
        let node = this.root;
        let output = [];
        // for every character in the prefix
        for (let i = 0; i < prefix.length; i++) {
            // make sure prefix actually has words
            if (node.children[prefix[i]]) {
                node = node.children[prefix[i]];
            } else {
                // there's none. just return it.
                return output;
            }
        }
        // recursively find all words in the node
        this.findAllWords(node, output);
        return output;
    }

    // recursive function to find all words in the given node.
    findAllWords(node, output) {
        // base case, if node is at a word, push to output
        if (node.end) {
            output.unshift(node.getWord());
        }
        // iterate through each children, call recursive findAllWords
        for (let child in node.children) {
            this.findAllWords(node.children[child], output);
        }
    }
}

// -----------------------------------------

// instantiate our trie
let trie = new Trie();

// insert few values
trie.insert("hello");
trie.insert("helium");

// check contains method
console.log(trie.contains("helium")); // true
console.log(trie.contains("kickass")); // false

// check find method
console.log(trie.find("hel")); // [ 'helium', 'hello' ]
console.log(trie.find("hell")); // [ 'hello' ]

trie.insert("bathroom");
trie.insert("bath");
trie.insert("bat");
trie.insert("batman");
trie.insert("batmobile");

console.log(trie.find("bat"));
