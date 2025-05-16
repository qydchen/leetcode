const flakyPromises = require("../flakyPromises");

jest.useFakeTimers();

describe("flakyPromises", () => {
  test("should return the result of the first successful promise", (done) => {
    const fns = [
      () => new Promise((_, rej) => setTimeout(() => rej(100), 200)),
      () => new Promise((_, rej) => setTimeout(() => rej(200), 100)),
      () => new Promise((res) => setTimeout(() => res(400), 1500)),
      () => new Promise((res) => setTimeout(() => res(300), 300)),
      () => new Promise((res) => setTimeout(() => res(500), 100)),
    ];

    flakyPromises(fns, (result) => {
      expect(result).toBe(400); // The first successful promise returns 400
      done();
    });
    jest.runAllTimers();
  });

  test("should handle all promises failing", (done) => {
    const fns = [
      () => new Promise((_, rej) => setTimeout(() => rej(100), 200)),
      () => new Promise((_, rej) => setTimeout(() => rej(200), 100)),
    ];

    flakyPromises(fns, (result) => {
      expect(result).toBeUndefined(); // No successful promise
      done();
    });
    jest.runAllTimers();
  });

  test("should handle an empty array of functions", (done) => {
    flakyPromises([], (result) => {
      expect(result).toBeUndefined(); // No functions to execute
      done();
    });
    jest.runAllTimers();
  });

  test("should return the first successful result even if later promises are faster", (done) => {
    const fns = [
      () => new Promise((res) => setTimeout(() => res(100), 300)),
      () => new Promise((res) => setTimeout(() => res(200), 100)),
      () => new Promise((res) => setTimeout(() => res(300), 200)),
    ];

    flakyPromises(fns, (result) => {
      expect(result).toBe(100); // The first promise is the most accurate
      done();
    });
    jest.runAllTimers();
  });

  test("should return the first successful result even if later promises are still pending", (done) => {
    const fns = [
      () => new Promise((res) => setTimeout(() => res(100), 0)),
      () => new Promise((res) => setTimeout(() => res(200), 100)),
      () => new Promise((res) => setTimeout(() => res(300), 200)),
    ];

    flakyPromises(fns, (result) => {
      expect(result).toBe(100); // The first promise is the most accurate
      done();
    });
    jest.runAllTimers();
  });
});
