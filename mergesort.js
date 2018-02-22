function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  return merged(left, right);
}

function merged(left, right) {
  let sorted = [];
  let leftdup = left.slice();
  let rightdup = right.slice();
  while (leftdup.length > 0 && rightdup.length > 0) {
    let firstLeft = leftdup[0];
    let firstRight = rightdup[0];
    if (firstLeft > firstRight) {
      sorted.push(rightdup.shift());
    } else {
      sorted.push(leftdup.shift());
    }
  }
  return sorted.concat(leftdup, rightdup);
}

console.log(mergeSort([5, 4, 3, 1, 2]));
console.log(mergeSort([55, 123, 151, 6212, 7, 14, 13, 78, 1, 99]));
