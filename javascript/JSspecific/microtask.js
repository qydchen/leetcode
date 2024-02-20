// A microtask is a short function which is executed after the function or program which created it exits
// and only if the JavaScript execution stack is empty, but before returning control to the event loop
// being used by the user agent to drive the script's execution environment.

const add = (a, b) => a + b;

const asyncAdd = async (a, b) => {
  return await (a + b);
};

queueMicrotask(() => {
  console.log("in microtask 1");
});

console.log(add(1, 2));

asyncAdd(3, 4).then(console.log);
queueMicrotask(() => {
  console.log("in microtask 2");
});

asyncAdd(10, 11).then(console.log);

// prints:
// 3
// in microtask 1
// in microtask 2
// 7
