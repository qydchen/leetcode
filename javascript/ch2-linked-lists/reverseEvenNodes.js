class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next ? next : null;
  }
}

function reverse(head) {
  let prev = null;
  let curr = head;
  let next = null;
  while (curr) {
    if (curr && curr.val % 2 === 0) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    } else {
      curr = curr.next;
    }
  }
  return head;
}

let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(4);
let d = new ListNode(3);

a.next = b;
b.next = c;
c.next = d;

let reversed = reverse(a);
console.log('head value is:', reversed);

let curr = reversed;
while (curr) {
  console.log(curr.val);
  curr = curr.next;
}
