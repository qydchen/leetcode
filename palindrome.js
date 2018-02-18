const isPalindrome = function(s) {
  let p = s.toLowerCase().replace(/[^\w]|_/g,'');
  for (let i = 0; i < Math.floor(p.length / 2); i++) {
    if (p[i] !== p[p.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
