// Implement a MyQueue class which implements a queue using two stacks.

class MyQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(el) {
    this.stack1.push(el);
    return this.stack1.size;
  }

  dequeue() {
    while (this.stack1.size > 1) {
      this.stack2.push(this.stack1.peek());
      this.stack1.pop();
    }
    let dequeued = this.stack1.peek();
    this.stack1.pop();
    while (this.stack2.size > 0) {
      this.stack1.push(this.stack2.peek());
      this.stack2.pop();
    }
    return dequeued;
  }

  peek() {
    while (this.stack1.size > 1) {
      this.stack2.push(this.stack1.peek());
      this.stack1.pop();
    }
    let peek = this.stack1.peek();
    while (this.stack2.size > 0) {
      this.stack1.push(this.stack2.peek());
      this.stack2.pop();
    }
    return peek;
  }

}

function Stack() {
  let stack = [];
  return (() => {
    this.size = 0;
    this.pop = () => stack.pop() ? this.size -= 1 : false;
    this.peek = () => stack[stack.length - 1];
    this.push = (el) => {
      this.size += 1;
      stack.push(el);
    };
  })()
}

let queue = new MyQueue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
console.log(queue.dequeue());
console.log(queue.dequeue());
// console.log(queue.dequeue());
console.log(queue.peek());
