function bubbleSort(array) {
  var swapped = true;
  var sortedArray = array.slice();
  while (swapped) {
    swapped = false;
    for (var i = 0; i < sortedArray.length; i++) {
      var first = sortedArray[i];
      var next = sortedArray[i + 1];
      if (first > next) {
        sortedArray[i] = next;
        sortedArray[i + 1] = first;
        swapped = true;
      }
    }
  }
  return sortedArray;
}

console.log(bubbleSort([5,4,3,1,2]));
console.log(bubbleSort([55,123,151,6212,7,14,13,78,1,99]));
