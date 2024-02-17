class MyPromise {}

const p = new Promise((res) => {
  setTimeout(() => res(2), 500);
});

p.then((v) => v + 5)
  .then((v) => v * 2)
  .then(console.log);

p.then(
  (v) =>
    new Promise((res) => {
      setTimeout(() => res(v + 69), 1000);
    })
)
  .then((v) => {
    return Promise.race([slow, fast]).then((r) => r + v);
  })
  .then(console.log);

const slow = new Promise((r) => {
  setTimeout(() => {
    r(100);
  }, 5000);
});

const fast = new Promise((r) => {
  setTimeout(() => {
    r(10);
  }, 1000);
});
