const mergeTwoSortedArray = (a, b) => {
  let p1 = a.length - b.length - 1; // 1
  let p2 = a.length - 1; // 3
  let p3 = b.length - 1; // 1

  while (p3 >= 0 && p1 >= 0) {
    // 0 >= 0
    let bValue = b[p3]; // 2
    let aValue = a[p1]; // 4
    if (bValue > aValue) {
      // 2 > 4 ?
      a[p2] = bValue;
      p3--;
    } else {
      a[p2] = aValue;
      p1--;
    }
    p2--;
  }

  if (p1 <= 0) {
    p1 = p3;
  }
  while (p1 >= 0) {
    a[p1] = b[p1];
    p1--;
  }
  return a;
};

let a = [1, 4, undefined, undefined],
  b = [2, 3];
console.log(mergeTwoSortedArray(a, b));

(a = [1, 2, undefined, undefined]), (b = [1, 2]);
console.log(mergeTwoSortedArray(a, b));

(a = [4, 5, undefined, undefined]), (b = [1, 2]);
console.log(mergeTwoSortedArray(a, b));
