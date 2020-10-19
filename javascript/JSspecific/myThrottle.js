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

const sayHello = () => console.log("hello");
const throttledHello = myThrottle(sayHello, 100);
setTimeout(() => throttledHello(), 0);
setTimeout(() => throttledHello(), 10);
setTimeout(() => throttledHello(), 150);
setTimeout(() => throttledHello(), 225);
setTimeout(() => throttledHello(), 250);
