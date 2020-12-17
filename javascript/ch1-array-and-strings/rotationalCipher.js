// One simple way to encrypt a string is to "rotate" every alphanumeric character by a certain amount.
// Rotating a character means replacing it with another character that is a certain number of steps away
// in normal alphabetic or numerical order.
// For example, if the string "Zebra-493?" is rotated 3 places, the resulting string is "Cheud-726?".
// Every alphabetic character is replaced with the character 3 letters higher (wrapping around from Z to A), and every numeric character replaced with the character 3 digits higher (wrapping around from 9 to 0). Note that the non-alphanumeric characters remain unchanged.
// Given a string and a rotation factor, return an encrypted string.
// Signature

// string rotationalCipher(string input, int rotationFactor)
// Input
// 1 <= |input| <= 1,000,000
// 0 <= rotationFactor <= 1,000,000

// Output
// Return the result of rotating input a number of times equal to rotationFactor.
// Example 1
// input = Zebra-493?
// rotationFactor = 3
// output = Cheud-726?
// Example 2
// input = abcdefghijklmNOPQRSTUVWXYZ0123456789
// rotationFactor = 39
// output = nopqrstuvwxyzABCDEFGHIJKLM9012345678

const rotationalCipher = (input, rotationFactor) => {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = upper.toLowerCase();
  let result = '';
  for (let char of input) {
    const upperIdx = upper.indexOf(char);
    const lowerIdx = lower.indexOf(char);
    if (upperIdx > -1) {
      result += upper[(upperIdx + rotationFactor) % upper.length];
    } else if (lowerIdx > -1) {
      result += lower[(lowerIdx + rotationFactor) % lower.length];
    } else if (!isNaN(Number(char))) {
      result += String((Number(char) + rotationFactor) % 10);
    } else {
      result += char;
    }
  }
  return result;
};

console.log(rotationalCipher('Zebra-493', 3)); // -> Cheud-726
