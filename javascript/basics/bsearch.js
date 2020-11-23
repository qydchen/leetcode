let assert = require("assert");

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

assert.strictEqual(bsearch([2, 4, 6, 7, 8, 10, 13, 15, 17, 19, 20], 19), 9); // => 9
assert.strictEqual(bsearch([2, 4, 6, 7, 8, 10, 13, 15, 17, 19, 20], 18), -1); // => -1

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

assert.strictEqual(bsearch2([2, 4, 6, 7, 8, 10, 13, 15, 17, 19, 20], 19), 9); // => 9
assert.strictEqual(bsearch2([2, 4, 6, 7, 8, 10, 13, 15, 17, 19, 20], 18), -1); // => -1
assert.strictEqual(bsearch2([1, 3, 4, 5, 6, 8, 9], 3), 1); // => 1
assert.strictEqual(bsearch2([], 0), -1); // => -1
assert.strictEqual(bsearch2([1, 3, 7, 8, 88, 99, 100], 100), 6); // => 6

function iterativeBsearch(array, target) {
    let left = 0;
    let right = array.length;
    while (left < right) {
        let mid = Math.floor((right - left) / 2) + left;
        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return -1;
}

// Another working solution wiht array.length with a -1
// function iterativeBsearch(array, target) {
//     let left = 0;
//     let right = array.length - 1;
//     while (left < right) {
//         let mid = Math.floor((right - left) / 2) + left;
//         if (array[mid] === target) {
//             return mid;
//         } else if (array[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//     return -1;
// }

assert.strictEqual(
    iterativeBsearch([2, 4, 6, 7, 8, 10, 13, 15, 17, 19, 20], 19),
    9
); // => 9
assert.strictEqual(
    iterativeBsearch([2, 4, 6, 7, 8, 10, 13, 15, 17, 19, 20], 18),
    -1
); // => -1
assert.strictEqual(iterativeBsearch([1, 3, 4, 5, 6, 8, 9], 3), 1); // => 1
assert.strictEqual(iterativeBsearch([], 0), -1); // => -1
assert.strictEqual(iterativeBsearch([1, 3, 7, 8, 88, 99, 100], 100), 6); // => 6
assert.strictEqual(iterativeBsearch([5], 5), 0);

// Failing some cases
function iterativeBsearch2(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        // let mid = Math.floor((right - left) / 2) + 1 + left;
        let mid = Math.floor(left + (right - left) / 2) + 1;
        // let mid = Math.floor((right + left) / 2) + 1;
        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

assert.strictEqual(
    iterativeBsearch2([2, 4, 6, 7, 8, 10, 13, 15, 17, 19, 20], 19),
    9
); // => 9
assert.strictEqual(
    iterativeBsearch2([2, 4, 6, 7, 8, 10, 13, 15, 17, 19, 20], 18),
    -1
); // => -1
assert.strictEqual(iterativeBsearch2([1, 3, 4, 5, 6, 8, 9], 3), 1); // => 1
assert.strictEqual(iterativeBsearch2([], 0), -1); // => -1
assert.strictEqual(iterativeBsearch2([1, 3, 7, 8, 88, 99, 100], 100), 6); // => 6
assert.strictEqual(iterativeBsearch2([5], 5), 0);
