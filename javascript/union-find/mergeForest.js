const forest = [
    [1, 2, 3, 4],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
    [6, 7],
    [11, 12, 13],
];

// [1,2,3,4,5,6,7,8,9,10]

const mergeForest = (forest) => {
    const max = Math.max(...forest.flat());
    const P = Array(max)
        .fill()
        .map((_, i) => i);
    const find = (i) => {
        if (P[i] !== i) P[i] = find(P[i]);
        return P[i];
    };
    const union = (x, y) => {
        let i = find(x);
        let j = find(y);
        if (i === j) {
            return false;
        }
        P[i] = j;
        return true;
    };
    for (let tree of forest) {
        for (let i = 0; i < tree.length - 1; i++) {
            const left = i;
            const right = i + 1;
            union(tree[left], tree[right]);
        }
    }
    console.log(P);
};

console.log(mergeForest(forest));
