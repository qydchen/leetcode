class Group {
  max = null;
  min = null;
  collection = []; // 'A', 'B', 'C'
}

function generateStudyGroup(scores) {
  let result = [];
  for (let entry of Object.entries(scores)) {
    let name = entry[0];
    let score = entry[1];
    let diff = null;
    for (let group of result) {
      if (score > group.min) {
        diff = score - group.min;
      }
      if (score < group.max) {
        diff = group.max - score;
      }
      if (diff <= 15) {
        group.max = Math.max(score, group.max);
        group.min = Math.min(score, group.min);
        group.collection.push(name);
        break;
      }
    }
    if (diff === null || diff > 15) {
      let newGroup = new Group();
      newGroup.max = score;
      newGroup.min = score;
      newGroup.collection.push(name);
      result.push(newGroup);
    }
  }
  return result.map((group) => group.collection);
}

const input = { A: 20, B: 36, C: 40 };
console.log(generateStudyGroup(input));
const input2 = { A: 20, B: 22, C: 30 };
console.log(generateStudyGroup(input2));
const input3 = {
  A: 20,
  B: 22,
  C: 30,
  D: 35,
  E: 36,
  F: 50,
  G: 70,
  H: 10,
  I: 299,
  J: 0,
  K: 5,
};
console.log(generateStudyGroup(input3));
