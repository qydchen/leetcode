// Write a function that returns an infinite-method object.

// An infinite-method object is defined as an object that allows you to call any method and it will always return the name of the method.

// For example, if you execute obj.abc123(), it will return "abc123".



// Example 1:

// Input: method = "abc123"
// Output: "abc123"
// Explanation:
// const obj = createInfiniteObject();
// obj['abc123'](); // "abc123"
// The returned string should always match the method name.
// Example 2:

// Input: method = ".-qw73n|^2It"
// Output: ".-qw73n|^2It"
// Explanation: The returned string should always match the method name.

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