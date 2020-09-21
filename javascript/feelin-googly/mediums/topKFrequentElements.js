// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
// Note:

// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
// It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
// You can return the answer in any order.

// Naive
const topKFrequent = function (nums, k) {
    let frequency = new Map();
    for (let n of nums) {
        frequency.has(n)
            ? frequency.set(n, frequency.get(n) + 1)
            : frequency.set(n, 1);
    }
    let result = [];
    while (result.length !== k) {
        let max = -Infinity;
        let keyToAdd = null;
        for (let [k, v] of frequency) {
            if (v > max) {
                max = v;
                keyToAdd = k;
            }
        }
        frequency.delete(keyToAdd);
        result.push(keyToAdd);
    }
    return result;
};

// Bucket Sort
const topKFrequent2 = (nums, k) => {
    const map = {};
    const result = [];
    const bucket = Array(nums.length + 1)
        .fill()
        .map(() => []);

    for (let num of nums) {
        map[num] = ~~map[num] + 1;
    }

    for (let num in map) {
        bucket[map[num]].push(parseInt(num));
    }

    console.log(bucket);
    for (let i = nums.length; i >= 0 && k > 0; k--) {
        while (bucket[i].length === 0) i--;
        result.push(bucket[i].shift());
    }
    console.log(bucket);
    return result;
};

console.log(topKFrequent2([1, 1, 1, 2, 2, 3], 2));
