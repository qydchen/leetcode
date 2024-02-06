/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let split = path.split('/').filter(s => s.length > 0 && s !== '.'); // include only non-empty strings and elements that are not '.'

  let doubleCount = 0;
  for (let i = split.length - 1; i >= 0; i--) {
      if (split[i] === '..') {
          doubleCount++;
          split[i] = '';
      } else if (doubleCount > 0) {
          doubleCount--;
          split[i] = '';
      }
  }

  split = split.filter(s => s.length > 0); // filter out the empty strings which are marked for deletion along with '..'
  return '/' + split.join('/');
};