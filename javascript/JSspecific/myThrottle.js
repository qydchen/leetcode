const myThrottle = (cb, timer) => {
  let isThrottling = false;
  return (...args) => {
    if (!isThrottling) {
      isThrottling = true;
      setTimeout(() => {
        isThrottling = false;
      }, timer);
      cb(...args);
    }
  };
};

const myThrottle2 = (cb, timer) => {
  let isThrottled = false;
  return (...args) => {
    if (!isThrottled) {
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, timer);
      cb(...args);
    }
  };
};

const myThrottle3 = (cb, timer) => {
  let isThrottled = false;
  return (...args) => {
    if (!isThrottled) {
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, timer);
      return cb.apply(undefined, args);
    }
  };
};

const sayHello = (x, y, z) => console.log(x + y + z);
const throttledHello = myThrottle3(sayHello, 25);
setTimeout(() => throttledHello(1, 2, 3), 0);
setTimeout(() => throttledHello(4, 5, 6), 10);
setTimeout(() => throttledHello(1, 6, 8), 150);
setTimeout(() => throttledHello(9, 10, 11), 225);
setTimeout(() => throttledHello(1, 1, 1), 250);
