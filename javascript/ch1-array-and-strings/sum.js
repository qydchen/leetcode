const add = (n1, n2) => {
  let carry = 0;
  let ans = "";
  let longer, shorter;

  if (n1.length > n2.length) {
    longer = n1;
    shorter = n2;
  } else {
    longer = n2;
    shorter = n1;
  }
  for (let i = longer.length - 1; i >= 0; i--) {
    let c1 = longer.at(i);
    let c2 = shorter[i - (longer.length - shorter.length)] ?? "0";
    let sum = String(Number(c1) + Number(c2) + carry);
    ans = sum.at(-1) + ans;
    carry = sum.length > 1 ? Number(sum.at(0)) : 0;
  }
  if (carry > 0) {
    ans = String(carry) + ans;
  }
  return ans;
};

console.log(add("123", "45")); // 168
console.log(add("44", "66")); // 110
