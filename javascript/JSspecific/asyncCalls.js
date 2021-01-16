// Write a function that takes in an array of URLs ordered from most accurate to least
// The Urls can be flaky. Return the best avail. temp

let map = {
  best: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        let n = Math.round(Math.random());
        if (n) {
          resolve(42);
        } else {
          reject("nope");
        }
      }, 800);
    }),
  average: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        let n = Math.round(Math.random());
        if (n) {
          resolve(43);
        } else {
          reject("nope");
        }
      }, 500);
    }),
  worst: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        let n = Math.round(Math.random());
        if (n) {
          resolve(99);
        } else {
          reject("nope");
        }
      }, 700);
    }),
};

const tempUrlArray = ["/best", "/average", "/worst"];
const fetch = (url) => {
  return map[url.slice(1)].call();
};

let races = {};
const raceWrapper = (order, prom) => {
  races[order] = prom;
  return prom;
};

const fetchTemp = (urlArray) => {
  let fetches = urlArray.map((url, i) => raceWrapper(i, fetch(url)));
};

fetchTemp(tempUrlArray);
setTimeout(() => console.log(races), 1000);
