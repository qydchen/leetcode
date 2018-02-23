// Given a circular linked list, implement an algorithm that returns the node
// at the beginning of the loop.

// O(n) time
// O(1) space

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  print() {
    this._print(this);
  }

  _print(node) {
    while (node !== null) {
      console.log(node.val);
      node = node.next;
    }
  }
}

function checkLoop(node) {
  let slow;
  let fast;
  if (node !== null) {
    slow = node;
    fast = node;
  } else {
    return false;
  }

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
}


let a = new ListNode('a');
let b = new ListNode('b');
let c = new ListNode('c');
let d = new ListNode('d');
let e = new ListNode('e');
let f = new ListNode('f');
let x = new ListNode('x');
let y = new ListNode('y');
let z = new ListNode('z');

a.next = b;
a.next.next = c;
a.next.next.next = d;
a.next.next.next.next = e;
a.next.next.next.next.next = f;
a.next.next.next.next.next.next = x;
a.next.next.next.next.next.next.next = y;
a.next.next.next.next.next.next.next.next = z;
a.next.next.next.next.next.next.next.next.next = e;
console.log(checkLoop(a));

a.next = b;
a.next.next = null;
console.log(checkLoop(a));

a.next = b;
a.next.next = c;
a.next.next.next = null
console.log(checkLoop(a));

a.next = b;
a.next.next = c;
a.next.next.next = d;
a.next.next.next.next = e;
a.next.next.next.next.next = f;
a.next.next.next.next.next.next = x;
a.next.next.next.next.next.next.next = y;
a.next.next.next.next.next.next.next.next = e;
console.log(checkLoop(a));
