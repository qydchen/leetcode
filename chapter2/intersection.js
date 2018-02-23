// Given two singly linked lists, determine if the two lists intersect.
// Return the intersecting node. Note that the intersection is defined
// based on reference, not value. That is, if the kth node of the first linked
// list is the exact same node (by reference) as the jth node of the second
// linked list, then they are intersecting.

// 3 - 2 - 6 \
//             7 - 3 - 1 - 11
//     5 - 9 /

// 7 is the intersection

// 1. traverse both linked lists to get to the end, while getting the length of both
// linked lists.

// 2. increment the longer list the difference between the long and short to
// traverse simultaneously while checking each node they traverse for equality

// 3. return the first traversal that has the same node

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

function intersection(l1, l2) {
  const tailSize1 = getTailAndSize(l1);
  const tailSize2 = getTailAndSize(l2);
  if (tailSize1.tail !== tailSize2.tail) return null;

  let shorter = tailSize1.size < tailSize2.size ? l1 : l2;
  let longer = tailSize1.size > tailSize2.size ? l1 : l2;
  const diff = Math.abs(tailSize1.size - tailSize2.size);

  let steps = 0;
  while (steps < diff) {
    longer = longer.next;
    steps++;
  }

  while (longer !== shorter) {
    longer = longer.next;
    shorter = shorter.next;
  }

  return longer;

}

function getTailAndSize(node) {
  let obj = {size: 0, tail: null};
  while (node !== null) {
    if (node.next === null) {
      obj.tail = node;
    }
    obj.size++;
    node = node.next;
  }
  return obj;
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
//a - b - c - d - e - f

x.next = y;
x.next.next = z;
x.next.next.next = e;
x.next.next.next.next = f;
//    x - y - z - e - f

// a.print();
// x.print();

// let sizeA = getTailAndSize(a);
// let sizeX = getTailAndSize(x);
// console.log(sizeA.tail === sizeX.tail)
console.log(intersection(a, x)); // => ListNode('e')
