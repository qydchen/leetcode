function Node(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function (list1, list2) {
  if (list1 == null) return list2;
  if (list2 == null) return list1;

  // reference to the return value; has to be the head
  let head = null;
  // reference to the return head's linked list nodes
  let curr = null;

  let curr1 = list1; // 1 -> 2 -> 4
  let curr2 = list2; // 1 -> 3 -> 4

  if (curr1.val <= curr2.val) {
    // 1 <= 1 ?
    head = curr1; // head = 1
    curr = head; // curr = 1

    curr1 = curr1.next; // 2 -> 4
  } else {
    head = curr2;
    curr = head;

    curr2 = curr2.next;
  }

  while (curr1 !== null || curr2 !== null) {
    // curr1: null; curr2: null
    if (curr1 === null) {
      curr.next = curr2; // 1 -> 1 -> 2 -> 3 -> 4 -> 4
      curr2 = curr2.next; // null
    } else if (curr2 === null) {
      curr.next = curr1;
      curr1 = curr1.next;
    } else if (curr1.val <= curr2.val) {
      // 4 <= 4
      curr.next = curr1; // 1 -> 1 -> 2 -> 3 -> 4
      curr1 = curr1.next; // null
    } else {
      curr.next = curr2; // curr & head = 1 -> 1 -> 2 -> 3
      curr2 = curr2.next; // 4
    }
    curr = curr.next;
  }
  return head;
};

let a = new Node(1);
let b = new Node(2);
let c = new Node(4);
let d = new Node(1);
let e = new Node(3);
let f = new Node(4);

a.next = b;
b.next = c;

d.next = e;
e.next = f;

list1 = a;
list2 = d;

let res = mergeTwoLists(list1, list2);
console.log(res);
while (res != null) {
  console.log(res.val);
  res = res.next;
}

a = new Node(1);
b = new Node(2);
c = new Node(4);
d = new Node(1);
e = new Node(3);
f = new Node(4);

let rest1 = mergeTwoLists(a, b);
console.log({ rest1 });

a = new Node(1);
let rest2 = mergeTwoLists(a, null);
console.log({ rest2 });
let rest3 = mergeTwoLists(null, null);
console.log({ rest3 });
