function indexOf(array, element, offset = 0) {
 // split array in half
 const half = parseInt(array.length / 2);
 const current = array[half];
 if(current === element) {
   return offset + half;
 } else if(element > current) {
   const right = array.slice(half);
   return indexOf(right, element, offset + half);
 } else {
   const left = array.slice(0, half)
   return indexOf(left, element, offset);
 }
}


// time complexity O(logn) - Binary Search. As n increases, increases only log(n).
// target is 9

// [3, 6, 9, 15, 22, 42, 55, 111, 125]

// [3, 6, 9, 15]

// [9, 15]

// [9]

// space complexity O(logn) - As binary search recursively splits the array by half,
// only log(n) time will be the recursive functions be called