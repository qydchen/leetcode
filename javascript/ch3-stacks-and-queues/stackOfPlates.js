// Imagine a literal stack of plates, if the stack gets too high, it might
// topple. Therefore, in real life, we would likely start a new stack when
// the previous stack excees some threshold. Implement a datastructure SetOfStacks
// that mimics this. SetOfStacks should be composed of several stacks and should
// create a new stack once the previous one exceeds capacity.
// SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stacks
// (that is, pop() shoudld return the same values as it would if there were just a single stack)
//
// FOLLOW UP
// Implement a function popAt(index) which performs a pop operation on a specific sub-stack.

class SetOfStacks {
  constructor(capacity) {
    this.set = [];
    this.capacity = capacity;
    this.current = -1;
    this.currentStack = this.set[this.current];
  }

  push(el) {
    if (this.set.length === 0 || this.currentStack.size === this.capacity) {
      this.addStack();
    }
    this.currentStack.push(el);
  }

  pop() {
    if (this.set.length === 0) {
      return false;
    }
    this.currentStack.pop();
    this.shrink();
  }

  peek() {
    return this.currentStack ? this.currentStack.peek() : null;
  }

  popAt(idx) {
    if (this.set[idx] && this.set[idx].size) {
      this.set[idx].pop();
    } else {
      return false;
    }
    this.shrink();
  }

  addStack() {
    this.set.push(new Stack());
    this.current += 1;
    this.currentStack = this.set[this.current];
  }

  shrink() {
    if (this.currentStack.size === 0) {
      this.current--;
      this.set.pop();
      this.currentStack = this.set[this.current];
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

// let a = new Stack();
// a.push('a');
// console.log(a.peek());
// a.push('b');
// console.log(a.size);
// console.log(a.peek());
// a.pop();
// console.log(a.size);
// a.pop();
// console.log(a.size);
// console.log(a.peek());

let set = new SetOfStacks(3);
set.push('a');
set.push('b');
set.push('c');
set.push('d');
set.push('e');
set.push('f');
// console.log(set.set)
set.popAt(1);
// console.log(set.set)
set.popAt(1);
set.popAt(1);
set.popAt(1);
// console.log(set.set);
