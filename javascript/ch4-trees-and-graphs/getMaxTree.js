class BST {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// time O(n) where n == # of node
// space O(d) where d == height of the tree

function checkMax(root) {
    let queue = [root];
    const maxes = [];
    while (queue.length !== 0) {
        const max = Math.max(...queue.map((n) => n.val));
        maxes.push(max);
        const newQueue = [];
        for (let node of queue) {
            if (node.left) {
                newQueue.push(node.left);
            }
            if (node.right) {
                newQueue.push(node.right);
            }
        }
        queue = newQueue;
    }
    return maxes;
}

const three = new BST(3);
const seven = new BST(7);
const four = new BST(4);
const two = new BST(2);
const nine = new BST(9);
const six = new BST(6);

three.left = seven;
three.right = four;
seven.left = two;
four.left = nine;
four.right = six;

console.log(checkMax(three));
