function myDebounce(cb, timer, ctx) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => cb.apply(ctx, args), timer);
  };
}

const sayHello = (a, b, c) => {
  console.log(`hello, a:${a} b:${b} c:${c}`);
};

const foo = {
  name: "my name",
  bar() {
    console.log(this.name);
  },
};

const debounced = myDebounce(sayHello, 1000);
debounced(1, 2, 3);
debounced(3, 4, 5);

const sayGoodbye = (a, b) => {
  console.log(`hello, a:${a} b:${b}`);
};

const goodbye = myDebounce(sayGoodbye, 100);
setTimeout(() => goodbye("a", "b"), 0);
setTimeout(() => goodbye("c", "d"), 90);
setTimeout(() => goodbye("e", "f"), 400);

const caller = myDebounce(foo.bar, 100, foo);
setTimeout(() => caller(), 10);
