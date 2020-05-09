// Given a positive integer num, write a function which returns True if num is a perfect square else False.

//     Note: Do not use any built -in library function such as sqrt.

//         Example 1:

// Input: 16
// Output: true
// Example 2:

// Input: 14
// Output: false

const isPerfectSquare = (n) => {
    for (let i = 0; i <= Math.ceil(n/2); i+= 1) {
        if (i * i > n) {
            return false;
        }
        if (i * i === n) {
            return true;
        }
    }
}