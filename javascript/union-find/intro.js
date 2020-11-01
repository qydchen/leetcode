class UnionFind {
    // The number of elements in this union find
    size = 0;
    // Used to track the sizes of each of the components
    sz = [];
    // id[i] points to the parent of i, if id[i] = i then i is a root node
    id = [];
    // Tracks the number of components in the union find
    numComponents = 0;
    constructor(size) {
        if (size <= 0) throw new Error("Size <= 0 is not allowed");
        this.size = this.numComponents = size;
        this.sz = Array(size);
        this.id = Array(size);
        for (let i = 0; i < size; i++) {
            id[i] = i;
            sz[i] = 1;
        }
    }

    find(p) {
        // Find the root of the component/set
        let root = p;
        while (root != id[root]) {
            root = id[root];
        }
        // Compress the path leading back to the root.
        // Doing this operation is called "path compression"
        // and is what gives us amortized constant time complexity.
        while (p != root) {
            let next = id[p];
            id[p] = root;
            p = next;
        }
        return root;
    }

    // Return whether or not the elements 'p' and 'q' are in the same components/set.
    connected(p, q) {
        return this.find(p) === this.find(q);
    }

    // Return the size of the components/set 'p' belongs to
    componentSize(p) {
        return this.sz[find(p)];
    }

    // Return the number of elements in this UnionFind/Disjoint set
    size() {
        return this.size;
    }

    // Returns the number of remaining components/sets
    components() {
        return this.numComponents;
    }

    // Unify the components/sets containing elements 'p' and 'q'
    unify(p, q) {
        let root1 = find(p);
        let root2 = find(q);

        // There elements are already in the same group;
        if (root1 == root2) return;

        // Merge two components/sets together.
        // Merge smaller component/set into the larger one.
        if (this.sz[root1] < sz[root2]) {
            sz[root2] += sz[root1];
            id[root1] = root2;
        } else {
            sz[root1] += sz[root2];
            id[root2] = root1;
        }

        // Since the roots found are different we know that the number of
        // components/sets has decreased by one
        this.numComponents--;
    }
}
