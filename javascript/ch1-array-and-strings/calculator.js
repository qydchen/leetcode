// Given a string s which represents an expression, evaluate this
// expression and return its value.
// The integer division should truncate toward zero.
// Example 1:

// Input: s = "3+2*2"
// Output: 7
// Example 2:

// Input: s = " 3/2 "
// Output: 1
// Example 3:

// Input: s = " 3+5 / 2 "
// Output: 5

function calculate(s) {
  if (!s) return -1;
  const stack = [];
  let number = 0;
  let previousSign = "+";
  for (let i = 0; i < s.length; i++) {
    console.log("----");
    console.log(previousSign);
    console.log(stack);
    const character = s[i];
    if (!isNaN(character) && character !== " ")
      number = number * 10 + Number(character);
    if (isNaN(character) || i === s.length - 1) {
      switch (previousSign) {
        case "+":
          stack.push(number);
          break;
        case "-":
          stack.push(-number);
          break;
        case "*":
          stack.push(stack.pop() * number);
          break;
        case "/":
          stack.push(parseInt(stack.pop() / number));
          break;
        default:
          break;
      }
      previousSign = character;
      number = 0;
    }
  }
  return stack.reduce((a, b) => a + b);
}

console.log(calculate("3+2*2"));
console.log(calculate("3+5/2"));
