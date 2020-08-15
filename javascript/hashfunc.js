function hashFunc(str, capacity) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    console.log(hash);
    hash = (hash & hash) % capacity;
    console.log(hash);
  }
  return hash;
};

hashFunc('hello', 8);
