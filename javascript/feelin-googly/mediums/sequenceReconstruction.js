var assert = require("assert");
/**
 * @param {number[]} org
 * @param {number[][]} seqs
 * @return {boolean}
 */
var sequenceReconstruction = function (org, seqs) {
    const map = new Map();
    const indegree = new Map();
    for (let seq of seqs) {
        for (let i = 0; i < seq.length - 1; i++) {
            if (!map.has(seq[i])) {
                map.set(seq[i], new Set());
                indegree.set(seq[i], 0);
            }
            if (!map.has(seq[i + 1])) {
                map.set(seq[i + 1], new Set());
                indegree.set(seq[i + 1], 0);
            }
            if (map.get(seq[i]).add(seq[i + 1])) {
                indegree.set(seq[i + 1], indegree.get(seq[i + 1]) + 1);
            }
        }
    }

    const queue = [];
    for (let [key, value] of indegree.entries()) {
        if (value === 0) queue.push(key);
    }

    let idx = 0;
    while (queue.length !== 0) {
        if (queue.length > 1) return false;
        let curr = queue.shift();
        if (idx === org.length || curr !== org[idx]) return false;
        idx += 1;
        for (let next of map.get(curr)) {
            indegree.set(next, indegree.get(next) - 1);
            if (indegree.get(next) === 0) queue.push(next);
        }
    }
    return idx === org.length && idx === map.size;
};

let org = [1, 2, 3];
let seqs = [
    [1, 2],
    [1, 3],
];

// assert.strictEqual(sequenceReconstruction(org, seqs), false); // false
// assert.strictEqual(sequenceReconstruction(org, [[1, 2]]), false); // false
// assert.strictEqual(
//     sequenceReconstruction(
//         [1, 2, 3],
//         [
//             [1, 2],
//             [1, 3],
//             [2, 3],
//         ]
//     ),
//     true
// ); // true

// This doesn't work. Dont know why
assert.strictEqual(
    sequenceReconstruction(
        [4, 1, 5, 2, 6, 3],
        [
            [5, 2, 6, 3],
            [4, 1, 5, 2],
        ]
    ),
    true
); // true
