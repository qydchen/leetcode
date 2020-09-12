class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeKthNodeFromEnd(head, k) {
    let behind = head;
    let ahead = head;
    let count = 1;
    while (count <= k) {
        ahead = ahead.next;
        count++;
    }
    if (ahead === null) {
        head.value = head.next.value;
        head.next = head.next.next;
        return;
    }
    while (ahead.next !== null) {
        ahead = ahead.next;
        behind = behind.next;
    }
    let temp = behind.next;
    behind.next = behind.next.next;
    return temp;
}

let head = new LinkedList("a");
head.next = new LinkedList("a");
head.next.next = new LinkedList("a");
head.next.next.next = new LinkedList("a");
head.next.next.next.next = new LinkedList("b");
head.next.next.next.next.next = new LinkedList("b");
head.next.next.next.next.next.next = new LinkedList("c");
