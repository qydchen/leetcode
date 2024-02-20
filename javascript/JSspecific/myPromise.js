class MyPromise {
  constructor(executor) {
    this.value = undefined;
    this.callbacks = [];
    this.fulfilled = false;
    this.resolve = this.resolve.bind(this);

    executor(this.resolve);
  }

  resolve = (val) => {
    if (!this.fulfilled) {
      this.fulfilled = true;
      this.value = val;
      this.callbacks.forEach((cb) => cb(val));
    }
  };

  then = (callback) => {
    return new MyPromise((resolve) => {
      const handleCallback = () => {
        const result = callback(this.value);
        if (result instanceof MyPromise) {
          result.then(resolve);
        } else {
          resolve(result);
        }
      };

      if (!this.fulfilled) {
        this.callbacks.push(handleCallback);
      } else {
        handleCallback();
      }
    });
  };
}

const o = new MyPromise((res) => {
  res(3);
});

o.then((c) => c + 2)
  .then(console.log)
  .then((_) => "foo")
  .then((v) => {
    return new MyPromise((res) =>
      setTimeout(() => {
        const ans = v + "bar";
        console.log(ans);
        res(ans);
      }, 1000)
    );
  })
  .then((v) => {
    return new MyPromise((res) =>
      setTimeout(() => {
        const ans = v + "baz";
        console.log(ans);
        res(ans);
      }, 1000)
    );
  });

o.then((p) => p + p).then(console.log);

const p = new MyPromise((res) => {
  setTimeout(() => res(2), 0);
});

p.then((v) => v + 5)
  .then((v) => v * 2)
  .then(console.log);

p.then((v) => v * 99).then(console.log);

p.then(
  (v) =>
    new MyPromise((res) => {
      setTimeout(() => res(v + 69), 1000);
    })
).then(console.log);

const slow = new MyPromise((r) => {
  setTimeout(() => {
    r(100);
  }, 5000);
});

slow.then(console.log);

const fast = new MyPromise((r) => {
  setTimeout(() => {
    r(10);
  }, 1000);
});
fast.then(console.log);
