class HashMap {
  #storage = [];
  #count = 0;
  #capacity = 4;

  get diagnostics() {
    return {
      storage: JSON.stringify(this.#storage),
      count: this.#count,
      capacity: this.#capacity,
    };
  }

  set(key, value) {
    const index = this.hashFunc(key, this.#capacity);
    const bucket = (this.#storage[index] = this.#storage[index] || []);

    for (const pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    if (++this.#count >= this.#capacity) this.resize(this.#capacity * 2);
  }

  delete(key) {
    const index = this.hashFunc(key, this.#capacity);
    const bucket = this.#storage[index];
    if (!bucket) return null;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        const [pair] = bucket.splice(i, 1);
        if (--this.#count < this.#capacity / 0.5)
          this.resize(this.#capacity / 2);
        return pair;
      }
    }
  }

  get(key) {
    const index = this.hashFunc(key, this.#capacity);
    const bucket = this.#storage[index];
    if (!bucket) return null;

    for (const pair of bucket) {
      if (pair[0] === key) return pair[1];
    }

    return null;
  }

  hashFunc(str, max) {
    let hash = 0;
    for (const letter of str) {
      hash = ((hash << 5) + letter.charCodeAt(0)) & hash;
    }
    return Math.abs(hash) % max;
  }

  resize(newLimit) {
    const oldStorage = this.#storage;
    this.#capacity = newLimit;
    this.#count = 0;
    this.#storage = [];

    for (const bucket of oldStorage) {
      if (bucket) {
        for (const [key, value] of bucket) {
          this.set(key, value);
        }
      }
    }
  }
}

const map = new HashMap();
map.set("hello", 123);
console.log(map.get("hello"));
map.set("hello", 999);
console.log(map.get("hello"));
console.log(map.delete("hello"));
console.log(map.get("hello"));
map.set("hello", 123);
map.set("goodbye", 0);
map.set("foo", 42);
console.log(map.diagnostics);
map.set("bar", 11);
console.log(map.diagnostics);
map.set("baz", 22);
console.log(map.diagnostics);

module.exports = HashMap;