class AncestralTree {
    constructor(name) {
        this.name = name;
        this.ancestor = null;
    }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    let curr = descendantOne;
    const map = new Map();
    while (curr !== null) {
        map.set(curr.name, curr);
        curr = curr.ancestor;
    }
    curr = descendantTwo;
    while (!map.has(curr.name)) {
        curr = curr.ancestor;
    }
    return map.get(curr.name);
}
