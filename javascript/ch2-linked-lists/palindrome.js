// Implement a function to check if a linked list is a palindrome.

// O(n) time
// O(n) space // where the stack is the space
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  print(node) {
    while (node !== null) {
      console.log(node.val);
      node = node.next;
    }
  }
}

function Stack() {
  let stack = []; // make the stack a private variable
  return (() => { // use IIFE to encapsulate
    this.size = 0;
    this.pop = () => {
      if (stack.pop()) {
        this.size--;
      } else {
        return false;
      }
    };
    this.push = (el) => {
      stack.push(el);
      this.size++;
    };
    this.peek = () => stack[stack.length - 1];
  })()
}

function checkPalindrome(node) {
  let stack = new Stack();
  if (node !== null) {
    stack.push(node);
  } else {
    return true;
  }
  let current = node;
  let fast = node;
  while (fast !== null && fast.next !== null) {
    stack.push(current);
    fast = fast.next.next;
    current = current.next;
  }
  if (fast !== null) { // handles odd # of nodes
    current = current.next;
  }
  while (current !== null) {
    if (stack.peek().val !== current.val) {
      return false;
    }
    stack.pop();
    current = current.next;
  }
  return true;
}


let head = new ListNode('a');
head.next = new ListNode('b');
head.next.next = new ListNode('a');

console.log(checkPalindrome(head)); // => true;
// head.print(head);

let head2 = new ListNode('r');
head2.next = new ListNode('a');
head2.next.next = new ListNode('c');
head2.next.next.next = new ListNode('e');
head2.next.next.next.next = new ListNode('c');
head2.next.next.next.next.next = new ListNode('a');
head2.next.next.next.next.next.next = new ListNode('r');

console.log(checkPalindrome(head2)); // => true;
// head2.print(head2);

let head3 = null;
console.log(checkPalindrome(head3)); // => true;

let head4 = new ListNode('a');
console.log(checkPalindrome(head4)); // => true;

let head5 = new ListNode('a');
head5.next = new ListNode('a');
console.log(checkPalindrome(head5)); // => true;

let head6 = new ListNode('a');
head6.next = new ListNode('b');
console.log(checkPalindrome(head6)); // => false;

let head7 = new ListNode('a');
head7.next = new ListNode('b');
head7.next.next = new ListNode('b');
console.log(checkPalindrome(head7)); // => false;

let head8 = new ListNode('r');
head8.next = new ListNode('a');
head8.next.next = new ListNode('x');
head8.next.next.next = new ListNode('e');
head8.next.next.next.next = new ListNode('c');
head8.next.next.next.next.next = new ListNode('a');
head8.next.next.next.next.next.next = new ListNode('r');

console.log(checkPalindrome(head8)); // => false;
