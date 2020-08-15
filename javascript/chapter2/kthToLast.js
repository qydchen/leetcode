// Implement an algorithm to find the kth to last element of a singly linked list.

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// O(n) time
// O(1) space

function returnKthToLast(node, k) {
  let front = node;
  let space = 0;
  while (space < k) {
    if (front === null) {
      return null;
    }
    front = front.next;
    space++;
  }
  while (front.next !== null) {
    front = front.next;
    node = node.next;
  }
  return node;
}

let head = new ListNode('a');
head.next = new ListNode('a');
head.next.next = new ListNode('a');
head.next.next.next = new ListNode('a');
head.next.next.next.next = new ListNode('b');
head.next.next.next.next.next = new ListNode('b');
head.next.next.next.next.next.next = new ListNode('c');

console.log(returnKthToLast(head, 0)); // => ListNode('c')
console.log(returnKthToLast(head, 1)); // => ListNode('b')
console.log(returnKthToLast(head, 2)); // => ListNode('b')
console.log(returnKthToLast(head, 3)); // => ListNode('a')
console.log(returnKthToLast(null, 2)); // => null
