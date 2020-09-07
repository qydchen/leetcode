// Write a program to sort a stack such that the smallest items are on top.
// You can use an additional temporary stack, but you may nto copy the
// elements into any other data structure (such as an array). The stack
// supports the following operations: push, pop, peek, and isEmpty.

// REVIEW THIS
function sortStack(stack) {

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
