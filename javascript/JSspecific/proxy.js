/**
 * @return {Object}
 */
var createInfiniteObject = function() {
  const handler = {
      get(_, prop) {
          return () => prop;
      }
  }
  return new Proxy({}, handler);
};