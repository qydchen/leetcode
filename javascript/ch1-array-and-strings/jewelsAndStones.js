const numJewelsInStones = (J, S) => {
  const jewels = new Set(J);
  return S.split('').reduce((res, s) => res + jewels.has(s), 0);
}

console.log(numJewelsInStones('aA', 'aAAbbbbb'));
