var combinationSum = function (candidates, target) {
  let tab = new Array(target + 1).fill().map(() => {
    return [];
  });
  for (let candidate of candidates) {
    for (let amount = 0; amount < tab.length; amount++) {
      if (candidate === amount) {
        tab.at(amount).push([amount]);
      } else if (candidate < amount) {
        let subArr = tab.at(amount - candidate);
        subArr = subArr.map((sub) => [...sub, candidate]);
        tab[amount] = [...tab.at(amount), ...subArr];
      }
    }
  }
  return tab.at(-1);
};
