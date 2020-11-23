// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1.
// The linked list holds the binary representation of a number.

// Return the decimal value of the number in the linked list.

const getDecimalValue = (head) => {
    if (!head) return 0;
    let str = "";
    let curr = head;
    while (curr) {
        str += curr.val;
        curr = curr.next;
    }
    return parseInt(str, 2);
};
