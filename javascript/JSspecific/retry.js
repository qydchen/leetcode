// // a function that will retry at least X times on an async call

const retry = (cb, times = 0) => {
  return new Promise((resolve, reject) => {
    let cbValue = cb();
    if (cbValue instanceof Promise) {
      cbValue
        .then((fulfilledValue) => {
          resolve(fulfilledValue);
        })
        .catch((reason) => {
          reject(reason);
        });
    } else {
      try {
        resolve(cbValue);
      } catch (e) {
        reject(e);
      }
    }
  }).catch((r) => {
    return new Promise((res, rej) => {
      if (times === 0) {
        rej(r);
        return;
      }
      res(retry(cb, times - 1));
    });
  });
};

let i = 0;
const call = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      i++;
      console.log("fetched", { i });
      if (i % 3 !== 0) {
        rej(`${i}, not divisible by 3`);
      }
      res(i);
    }, 1000);
  });
};

// retry(call, 2); // call should keep happening until it is successful, which i have hardcoded at 3rd attempt

retry(call, 1)
  .then((v) => console.log("success", v))
  .catch(console.log); // call should fail
retry(() => 55 + 14, 2).then((v) => console.log("success", v));

const retry2 = async (cb, times = 0) => {
  let ans;
  try {
    ans = await cb();
  } catch (e) {
    if (times === 0) throw e;
    ans = await retry2(cb, times - 1);
  }
  return ans;
};

let j = 0;
const call2 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      j++;
      console.log("fetched", { j });
      if (j % 3 !== 0) {
        rej(`${j}, not divisible by 3`);
      }
      res(j);
    }, 1000);
  });
};

retry2(call2, 4)
  .then((v) => console.log("success", v))
  .catch(console.log);

retry2(() => 1 + 2, 2).then((v) => console.log("success", v));
