function Stack() {
  const stack = [];
  return (() => {
    this.size = 0;
    this.pop = () => {
      const popped = stack.pop();
      if (popped) {
        this.size--;
        return popped;
      } else {
        return null;
      }
    };
    this.push = (el) => {
      stack.push(el);
      this.size++;
      return el;
    };
    this.peek = () => stack[stack.length - 1];
  })()
}
