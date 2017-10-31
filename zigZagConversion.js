function convert(s, numRows) {
  let newStr = '';
  if (numRows === 1) {
    return s;
  }
  for (let depth = 0; depth < numRows; depth++) {
    let flag = true, incrementor = 0, alternate = numRows - 1 - depth, newChar;
    if (depth % (numRows - 1) === 0) {
      while (depth + incrementor * 2 < s.length) {
        newStr += s[depth + incrementor * 2];
        incrementor += numRows - 1;
      }
    } else {
      while (depth + incrementor * 2 < s.length || depth + alternate * 2 < s.length) {
        if (flag) {
          newChar = s[depth + incrementor * 2] ? s[depth + incrementor * 2] : '';
          newStr += newChar;
          flag = !flag;
        } else {
          newChar = s[depth + alternate * 2] ? s[depth + alternate * 2] : '';
          newStr += newChar;
          alternate += numRows - 1;
          incrementor += numRows - 1;
          flag = !flag;
        }
      }
    }
  }
  return newStr;
};

console.log(convert('PAYPALISHIRING', 5));
console.log(convert('PAYPALISHIRING', 4));
console.log(convert('PAYPALISHIRING', 3));
console.log(convert('PAYPALISHIRING', 1));
console.log(convert('AB', 1));
console.log(convert('ABCD', 2));
console.log(convert('AB', 2));
