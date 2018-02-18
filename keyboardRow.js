// Given a list of words, return the words that can be typed using
// letters of alphabet on only one row's of American keyboard
const findWords = function(words) {
   const l1 = 'qwertyuiop';
   const l2 = 'asdfghjkl';
   const l3 = 'zxcvbnm';
   const result = [];
   for (let i = 0; i < words.length; i++) {
       const word = words[i];
       if (isInRow(word, l1)) {
           result.push(word);
       } else if (isInRow(word, l2)) {
           result.push(word);
       } else if (isInRow(word, l3)) {
           result.push(word);
       }
   }
   return result;
};

const isInRow = (word, level) => {
   return word.toLowerCase().split('').every(c=>level.indexOf(c) > -1);
}
