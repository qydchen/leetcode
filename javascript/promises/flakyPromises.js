// Given a list of fns, where the left most element in the array is more accurate, to least accurate.
// Return the most accurate fn.
function flakyPromises(fns, successCb) {
  if (!fns.length) {
    successCb();
    return;
  }
  const results = new Array(fns.length).fill();
  const resolved = new Array(fns.length).fill(false);
  const failed = new Array(fns.length).fill(false);
  let isComplete = false;
  for (let i = 0; i < fns.length; i++) {
    const fn = fns[i];
    fn()
      .then((r) => {
        results[i] = r;
      })
      .catch((e) => {
        failed[i] = true;
      })
      .finally(() => {
        resolved[i] = true;
        for (let j = 0; j < fns.length; j++) {
          if (!resolved[j]) return;
          if (!failed[j] && !isComplete) {
            isComplete = true;
            successCb(results[j]);
            return;
          }
        }
        if (resolved.every((r) => r) && failed.every((f) => f)) {
          successCb(undefined);
          return;
        }
      });
  }
}

// const fns = [
//   (cb) => new Promise((cb, rej) => setTimeout(() => rej(100), 2000)),
//   (cb) => new Promise((cb, rej) => setTimeout(() => rej(200), 1000)),
//   (cb) => new Promise((cb) => setTimeout(() => cb(400), 1500)),
//   (cb) => new Promise((cb) => setTimeout(() => cb(300), 3000)),
//   (cb) => new Promise((cb) => setTimeout(() => cb(500), 1000)),
// ];

// flakyPromises(fns, (results) => {
//   console.log({ results });
// });

module.exports = flakyPromises;
