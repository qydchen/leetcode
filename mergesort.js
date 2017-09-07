function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  var mid = Math.floor(array.length / 2);
  var left = mergeSort(array.slice(0, mid));
  var right = mergeSort(array.slice(mid));
  return merged(left, right);
}

function merged(left, right) {
  var sorted = [];
  var leftdup = left.slice();
  var rightdup = right.slice();
  while (leftdup.length > 0 && rightdup.length > 0) {
    var firstLeft = leftdup[0];
    var firstRight = rightdup[0];
    if (firstLeft > firstRight) {
      sorted.push(rightdup.shift());
    } else {
      sorted.push(leftdup.shift());
    }
  }
  return sorted.concat(leftdup, rightdup);
}

console.log(mergeSort([5,4,3,1,2]));
console.log(mergeSort([55,123,151,6212,7,14,13,78,1,99]));
