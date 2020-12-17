// Reverse a linked list

class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next ? next : null;
  }
}

const reverseLinkedList = (head) => {
  if (!head) return head;
  let prev = null;
  let curr = head;
  let next = null;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  head = prev;
  return head;
};

// curr = a
// before: a -> b; // prev = null // next = null
// after: a <- b; prev = a // next = b

// curr = b

let a = new ListNode('a');
let b = new ListNode('b');
let c = new ListNode('c');
let d = new ListNode('d');

a.next = b;
b.next = c;
c.next = d;

let reversed = reverseLinkedList(a);
console.log('head value is:', reversed);

let curr = reversed;
while (curr) {
  console.log(curr.val);
  curr = curr.next;
}
