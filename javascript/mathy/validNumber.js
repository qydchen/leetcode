// LC Hard

// Validate if a given string can be interpreted as a decimal number.

// Some examples:
// "0" => true
// " 0.1 " => true
// "abc" => false
// "1 a" => false
// "2e10" => true
// " -90e3   " => true
// " 1e" => false
// "e3" => false
// " 6e-1" => true
// " 99e2.5 " => false
// "53.5e93" => true
// " --6 " => false
// "-+3" => false
// "95a54e53" => false

// Note: It is intended for the problem statement to be ambiguous. It would be best if you gathered all requirements up front before implementing one. However, here is a list of characters that can be in a valid decimal number:

// Numbers 0-9
// Exponent - "e"
// Positive/negative sign - "+"/"-"
// Decimal point - "."
// Of course, the context of these characters also matters in the input.

const isNumber1 = (s) => !isNaN(Number(s)) && s.trim() !== "";

const signs = ["+", "-"];
const isNumber2 = function (s) {
  s = s.trim();
  if (s.length === 0) return false;

  const splits = s.split("e");
  if (splits.length === 0 || splits.length > 2) return false;
  if (splits.some((split) => split.length === 0)) return false;

  for (let i = 0; i < splits.length; i++) {
    const str = signs.includes(splits[i][0])
      ? splits[i].substring(1)
      : splits[i];
    let decimalFound = false;
    let numberFound = false;
    for (const ch of str) {
      if (ch === ".") {
        if (decimalFound || i === 1) return false;
        decimalFound = true;
      } else if (Number.isNaN(Number.parseInt(ch))) {
        return false;
      } else {
        numberFound = true;
      }
    }

    if (!numberFound) return false;
  }

  return true;
};
