class MinMaxStack {
    constructor() {
        this.stack = [];
        this.minStack = new Stack();
        this.maxStack = new Stack();
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }

    pop() {
        const number = this.stack.pop();
        if (number === this.minStack.peek()) {
            this.minStack.pop();
        }
        if (number === this.maxStack.peek()) {
            this.maxStack.pop();
        }
        return number;
    }

    push(number) {
        if (number <= this.minStack.peek() || !this.maxStack.peek()) {
            this.minStack.push(number);
        }
        if (number >= this.maxStack.peek() || !this.maxStack.peek()) {
            this.maxStack.push(number);
        }
        this.stack.push(number);
    }

    getMin() {
        return this.minStack.peek();
    }

    getMax() {
        return this.maxStack.peek();
    }
}

class Stack {
    constructor() {
        this.stack = [];
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    pop() {
        this.stack.pop();
    }
    push(number) {
        this.stack.push(number);
    }
}
