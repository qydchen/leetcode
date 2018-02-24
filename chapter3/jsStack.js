function Stack() {
  const stack = [];
  return (() => {
    this.size = 0;
    this.pop = () => {
      const popped = stack.pop();
      if (popped !== undefined) {
        this.size--;
        return popped;
      } else {
        return null;
      }
    };
    this.push = (el) => {
      if (el === undefined) {
        throw `Cannot push undefined`;
      }
      stack.push(el);
      this.size++;
      return el;
    };
    this.peek = () => stack[stack.length - 1];
  })()
}
