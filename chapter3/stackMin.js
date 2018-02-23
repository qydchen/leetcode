// How would you design a stack which, in addition to push and pop, has a function min
// which returns the minimum element? Push, pop, and min should all operate in O(1) time

class Stack {
  constructor() {
    this.stack = [];
    this.minimum = new MiniStack();
  }

  pop() {
    let removed = this.stack.pop();
    if (this.minimum.peek() === removed) {
      this.minimum.pop();
    }
  }

  push(el) {
    this.stack.push(el);
    if (el <= this.minimum.peek() || !this.minimum.peek()) {
      this.minimum.push(el);
    }
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  min() {
    return this.minimum.peek();
  }
}

class MiniStack {
  constructor() {
    this.stack = [];
  }

  pop() {
    this.stack.pop();
  }

  push(el) {
    this.stack.push(el)
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}

let stack = new Stack();
stack.push(5);
stack.push(17);
stack.push(3);
stack.push(3);
stack.push(42);
stack.push(30);
stack.push(1);
console.log(stack.min());
stack.pop();
stack.pop();
stack.pop();
console.log(stack.min());
stack.pop();
stack.pop();
console.log(stack.min());
