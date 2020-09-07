class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    inOrderPrint() {
        const { left, right } = this;
        if (left) {
            this.left.inOrderPrint();
        }
        console.log(this.value);
        if (right) {
            this.right.inOrderPrint();
        }
    }

    preOrderPrint() {
        console.log(this.value);
        const { left, right } = this;
        if (left) {
            this.left.preOrderPrint();
        }
        if (right) {
            this.right.preOrderPrint();
        }
    }

    postOrderPrint() {
        const { left, right } = this;
        if (left) {
            this.left.postOrderPrint();
        }
        if (right) {
            this.right.postOrderPrint();
        }
        console.log(this.value);
    }

    insert(value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BST(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new BST(value);
            } else {
                this.right.insert(value);
            }
        }
        return this;
    }

    contains(value) {
        if (value === this.value) {
            return true;
        } else if (value < this.value) {
            if (this.left) {
                return this.left.contains(value);
            } else {
                return false;
            }
        } else {
            if (this.right) {
                return this.right.contains(value);
            } else {
                return false;
            }
        }
    }

    remove(value, parent = null) {
        if (value < this.value) {
            if (this.left !== null) {
                this.left.remove(value, this);
            }
        } else if (value > this.value) {
            if (this.right !== null) {
                this.right.remove(value, this);
            }
        } else {
            if (this.left !== null && this.right !== null) {
                this.value = this.right.getMinValue();
                this.right.remove(this.value, this);
            } else if (parent === null) {
                if (this.left !== null) {
                    this.value = this.left.value;
                    this.right = this.left.right;
                    this.left = this.left.left;
                } else if (this.right !== null) {
                    this.value = this.right.value;
                    this.left = this.right.left;
                    this.right = this.right.right;
                }
            } else if (parent.left === this) {
                parent.left = this.left !== null ? this.left : this.right;
            } else if (parent.right === this) {
                parent.right = this.left !== null ? this.left : this.right;
            }
        }
        return this;
    }

    getMinValue() {
        if (this.left === null) {
            return this.value;
        } else {
            return this.left.getMinValue();
        }
    }
}

const bst = new BST(10);
//     10
//     / \
//    5   12
//   / \    \
//  1   7   13

bst.insert(5);
bst.insert(12);
bst.insert(13);
bst.insert(1);
bst.insert(7);

bst.inOrderPrint();

console.log(bst.contains(12));
console.log(bst.contains(55));
console.log(bst.contains(2));
console.log(bst.contains(7));

bst.remove(10);

bst.inOrderPrint();
