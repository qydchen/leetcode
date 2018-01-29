// Write a function to swap a number in place (that is, without
// temporary variables)

function numberSwapper(a, b) {
  console.log('before:', a, b);
  // a = 5, or 101
  // b = 6, or 110
  // use XOR
  a = a ^ b; // 101 ^ 110   = 011, or 3
  b = a ^ b; // 011 ^ 110   = 101, or 5
  a = a ^ b; // 011 ^ 101   = 110, or 6
  console.log('after:', a, b);
}

var n1 = 5;
var n2 = 6;
numberSwapper(n1, n2);
