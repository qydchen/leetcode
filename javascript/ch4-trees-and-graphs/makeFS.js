const s = [
  "root/folder1/folder2/file.txt",
  "root/folder1/folder2/555.txt",
  "root/folder1/123.txt",
];

const makeFS = (s) => {
  const root = {};
  for (let str of s) {
    const parts = str.split("/");
    let current = root;
    for (const part of parts) {
      if (!(part in current)) {
        current[part] = {};
      }

      current = current[part];
    }
  }
  return root;
};

console.log(JSON.stringify(makeFS(s), null, 2));
