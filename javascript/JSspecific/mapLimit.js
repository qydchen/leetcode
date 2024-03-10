const mapLimit = (iterator, limit, iteratee) => {};

// This will work on max two items in the array at a time
// When all items are processed it will resolve with the resulting array in the same order.
mapLimit([1, 2, 3, 4], 2, (n) => Promise.resolve(n * 2)).then((array) => {
  console.log(array);
});
