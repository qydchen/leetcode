/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;
  let root = { word: beginWord, children: [] };
  let queue = [root];
  let depth = 0;
  while (queue.length !== 0) {
    let newQueue = [];
    depth++;
    for (let node of queue) {
      if (node.word === endWord) return depth;
      let i = 0;
      while (i < wordList.length) {
        let word = wordList[i];
        if (isOneAway(node.word, word)) {
          wordList = wordList.slice(0, i).concat(wordList.slice(i + 1));
          node.children.push({ word, children: [] });
        } else {
          i++;
        }
      }
      console.log(node);
      newQueue.push(...node.children);
    }
    queue = newQueue;
  }
  return 0;
};

const isOneAway = (currentWord, nextWord) => {
  let count = 0;
  for (let i = 0; i < nextWord.length; i += 1) {
    if (currentWord[i] !== nextWord[i]) {
      count += 1;
    }
  }
  return count === 1;
};

const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

console.log(ladderLength(beginWord, endWord, wordList)); // Output: 5 As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog", return its length 5.

const a = "a";
const c = "c";
const l = [("a", "b", "c")];
console.log(ladderLength(a, c, l)); // 2
