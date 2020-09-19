function bsearch(array, target) {
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid + 1);
    if (array[mid] === target) {
        return mid;
    } else if (array[mid] > target) {
        return bsearch(left, target);
    } else if (array[mid] < target) {
        const rightSearch = bsearch(right, target);
        return rightSearch === -1 ? rightSearch : rightSearch + mid + 1;
    }
    return -1;
}

console.log(bsearch([2, 4, 6, 7, 8, 10, 13, 15, 17, 19, 20], 19)); // => 9
console.log(bsearch([2, 4, 6, 7, 8, 10, 13, 15, 17, 19, 20], 18)); // => -1

function bsearch2(array, target, leftIdx = 0, rightIdx = array.length - 1) {
    let mid = Math.floor((leftIdx + rightIdx) / 2);
    if (array[mid] === target) {
        return mid;
    } else if (array[mid] > target) {
        return bsearch(array, target, leftIdx, mid);
    } else if (array[mid] < target) {
        return bsearch(array, target, mid + 1, rightIdx);
    }
    return -1;
}

console.log(bsearch2([2, 4, 6, 7, 8, 10, 13, 15, 17, 19, 20], 19)); // => 9
console.log(bsearch2([2, 4, 6, 7, 8, 10, 13, 15, 17, 19, 20], 18)); // => -1
console.log(bsearch2([1, 3, 4, 5, 6, 8, 9], 3)); // => 1
console.log(bsearch2([], 0)); // => -1
console.log(bsearch2([1, 3, 7, 8, 88, 99, 100], 100)); // => 6
