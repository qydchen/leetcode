function runwithConcurrencyLimit(fns, limit, successCb) {
  const results = [];
  let active = 0;
  let idx = 0;
  let done = 0;

  function next() {
    while (active < limit && idx < fns.length) {
      active++;
      const fn = fns[idx];
      idx++;
      if (fn !== undefined) {
        fn(r => {
          console.log(r);
          results.push(r);
          done++;
          active--;
          if (done === fns.length) {
            successCb(results);
          } else {
            next();
          }
        });
      }
    }
  }
  next();
}

const fns = [
  (cb) => setTimeout(() => cb(100), 2000),
  (cb) => setTimeout(() => cb(200), 1000),
  (cb) => setTimeout(() => cb(300), 2000),
  (cb) => setTimeout(() => cb(400), 1500),
  (cb) => setTimeout(() => cb(500), 1000),
];

runwithConcurrencyLimit(fns, 2, (results) => {
  console.log(results);
});