/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn) {
  let vals = [];
  return function curried(...args) {
      vals = [...vals, ...args];
      return vals.length === fn.length ? fn(...vals, ...args) : curried
  }
};

/**
* function sum(a, b) { return a + b; }
* const csum = curry(sum);
* csum(1)(2) // 3
*/
