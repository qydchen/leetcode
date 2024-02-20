// given an array of weather apis, ordered left to right by most accurate to least accurate, return the most accurate weather forecast. the weather apis could be very flaky

const best = () => {
  return new Promise((res) => {
    setTimeout(() => res("best"), 1000); // this takes the longest to return
  });
};
const middle = () => {
  return new Promise((res) => {
    setTimeout(() => res("mid"), 20); // this takes the fastest to return
  });
};
const worst = () => {
  return new Promise((res) => {
    setTimeout(() => res("worst"), 100); // this takes the second longest to return
  });
};
const flaky = () => {
  return new Promise((res, rej) => {
    setTimeout(() => rej("flaky"), 10); // this returns the fastest but flaky
  });
};

const longFlaky = () => {
  return new Promise((res, rej) => {
    setTimeout(() => rej("longFlaky"), 5000); // this returns the really slow andflaky
  });
};

const apis = [flaky, flaky, best, middle, worst, flaky];

// params
function getMostAccurate(apis) {
  const isFulfilled = new Array(apis.length).fill(false);
  const fulfilledValues = new Array(apis.length).fill(undefined);
  return new Promise((res, rej) => {
    apis.forEach((api, idx) => {
      api()
        .then((v) => {
          isFulfilled[idx] = true;
          fulfilledValues[idx] = v;
          // if the previous apis did not resolve, do not pass value into res
          let isPrevResolved = isFulfilled.slice(0, idx).every((p) => p);
          if (isPrevResolved) {
            res(v);
          }
        })
        .catch(() => {
          isFulfilled[idx] = true;
          if (
            isFulfilled.every((isTrue) => isTrue) &&
            fulfilledValues.every((undef) => !undef)
          ) {
            rej("all apis failed");
          } else {
            for (let v of fulfilledValues) {
              if (v !== undefined) res(v);
            }
          }
        });
    });
  });
}

getMostAccurate(apis).then(console.log).catch(console.log); // should return "best"

getMostAccurate([flaky, flaky, flaky]).then(console.log).catch(console.log); // should return "all apis failed"

getMostAccurate([flaky, flaky, longFlaky, middle, worst]) // should return "middle", but wait for longFlaky to finish
  .then(console.log)
  .catch(console.log);
