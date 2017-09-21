// Determine whether an integer is a palindrome. Do this without extra space.

var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  let str = String(x);
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
