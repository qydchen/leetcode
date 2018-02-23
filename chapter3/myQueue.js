// Implement a MyQueue class which implements a queue using two stacks.

class MyQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.current = this.stack1;
    this.other = this.stack2;

  }

  enqueue(el) {
    this.current.push(el);
    return this.current.size;
  }

  dequeue() {
    while (this.current.size > 1) {
      this.other.push(this.current.peek());
      this.current.pop();
    }
    let dequeued = this.current.peek();
    this.current.pop();

    while (this.other.size > 0) {
      this.current.push(this.other.peek());
      this.other.pop();
    }

    return dequeued;
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
console.log(queue.dequeue());
