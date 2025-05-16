const runWithConcurrencyLimit = require("../runWithConcurrencyLimit");

jest.useFakeTimers();

describe("runWithConcurrencyLimit", () => {
  test("should execute functions with a concurrency limit", (done) => {
    const fns = [
      (cb) => setTimeout(() => cb(100), 50),
      (cb) => setTimeout(() => cb(200), 60),
      (cb) => setTimeout(() => cb(300), 1200),
      (cb) => setTimeout(() => cb(400), 40),
      (cb) => setTimeout(() => cb(500), 10),
    ];

    const expectedResults = [100, 200, 400, 500, 300];

    runWithConcurrencyLimit(fns, 2, (results) => {
      expect(results).toEqual(expectedResults);
      done();
    });

    jest.runAllTimers();
  });

  test("should execute functions with a concurrency limit pt 2", (done) => {
    const fns = [
      (cb) => setTimeout(() => cb(100), 500),
      (cb) => setTimeout(() => cb(200), 40),
      (cb) => setTimeout(() => cb(300), 30),
      (cb) => setTimeout(() => cb(400), 20),
      (cb) => setTimeout(() => cb(500), 40),
    ];

    const expectedResults = [200, 300, 400, 500, 100];

    runWithConcurrencyLimit(fns, 2, (results) => {
      expect(results).toEqual(expectedResults);
      done();
    });

    jest.runAllTimers();
  });

  test("should handle an empty array of functions", (done) => {
    runWithConcurrencyLimit([], 2, (results) => {
      expect(results).toEqual([]);
      done();
    });

    jest.runAllTimers();
  });

  test("should handle a concurrency limit greater than the number of functions", (done) => {
    const fns = [
      (cb) => setTimeout(() => cb(100), 200),
      (cb) => setTimeout(() => cb(200), 100),
    ];

    const expectedResults = [200, 100];

    runWithConcurrencyLimit(fns, 5, (results) => {
      expect(results).toEqual(expectedResults);
      done();
    });

    jest.runAllTimers();
  });
});
