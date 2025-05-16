// functions can only be run at a limit number of times
function runwithConcurrencyLimit(fns, limit, successCb) {
  const results = [];
  if (fns.length === 0) {
    successCb(results);
  }
  let active = 0;
  let idx = 0;
  let done = 0;

  function next() {
    while (active < limit && idx < fns.length) {
      active++;
      const fn = fns[idx];
      idx++;
      if (fn !== undefined) {
        fn((r) => {
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

module.exports = runwithConcurrencyLimit;
