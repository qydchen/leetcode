function memoize(func) {
  var memo = {};
  return function() {
    var arg = JSON.stringify(arguments);
    if (!memo[arg]) {
      memo[arg] = func.call(this, ...arguments)
      // console.log(...arguments)
    }
    // console.log(memo)
    return memo[arg];
  }
}

function addTwo(x, y) {
  return x + y;
}

var memory = memoize(addTwo)
// console.log(memory(1, 3))
// console.log(addTwo(1, 3))

// console.log(memory(5, 3))


// var arr = [1,3,4,5]
// func.call(this, ...arr)
// func.call(this, 1, 3, 4, 5)


function addAlot(a,b,c,d,e,f) {
  var args = Array.prototype.slice.call(arguments);
  // console.log(arguments);
  // console.log(arguments[3])
  // console.log(arguments.whatever = 'hi')
  // console.log(arguments)
  // console.log(args)
  return a + b + c + d + e + f;
}

console.log(addAlot(1,3,5,7,9,11));
