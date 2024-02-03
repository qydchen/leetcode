/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0) return x;
  let i = 0;
  while (i * i <= x) {
      if (i * i === x) return i;
      if (i * i > x) return i;
      i++;
  }
  return i - 1;
};
