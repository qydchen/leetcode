function bsearch(array, target) {
  var mid = Math.floor(array.length / 2);
  var left = array.slice(0, mid);
  var right = array.slice(mid + 1);
  if (array[mid] === target) {
    return mid;
  } else if (array[mid] > target) {
    return bsearch(left, target);
  } else if (array[mid] < target) {
    return bsearch(right, target) + mid + 1;
  }
}

console.log(bsearch([2,4,6,7,8,10,13,15,17,19,20], 19)) // => 9
