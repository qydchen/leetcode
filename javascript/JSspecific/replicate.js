/**
 * @param {number} times
 * @return {string}
 */
String.prototype.replicate = function (times) {
  if (times === 1) return this;
  if (!times) return "";
  let newT = times % 2 !== 0 ? times - 1 : times;
  let ans = this.replicate(newT / 2);
  return ans + ans + (times % 2 !== 0 ? this : "");
};
