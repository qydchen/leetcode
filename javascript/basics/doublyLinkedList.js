class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    setHead(node) {
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            return;
        }
        this.insertBefore(this.head, node);
    }

    setTail(node) {
        if (this.tail === null) {
            this.head === node;
            this.tail === node;
            return;
        }
        this.insertAfter(this.tail, node);
    }

    insertBefore(node, nodeToInsert) {}

    insertAfter(node, nodeToInsert) {}

    insertAtPosition(position, nodeToInsert) {}

    removeNodesWithValue(value) {}

    remove(node) {}

    containsNodeWithValue(value) {}
}
