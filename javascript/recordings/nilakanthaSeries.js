// Write the code of Nilakantha Series in Javascript

const nilakanthaSeries = (n) => {
  // O(n) time | O(1) space
  let pi = 3;
  for (let i = 1; i < n; i++) {
    const multiple = i % 2 === 0 ? -1 : 1;
    pi += multiple * (4 / (2 * i * (2 * i + 1) * (2 * i + 2)));
  }
  return pi;
};

console.log(nilakanthaSeries(100000));
