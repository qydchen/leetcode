class HashMap {
  #storage = [];
  #count = 0;
  #capacity = 4;

  // we'll use this as a helper function to analyze the internal behavior
  get diagnostics() {
    return {
      storage: JSON.stringify(this.#storage),
      count: this.#count,
      capacity: this.#capacity,
    };
  }

  set(key, value) {
    //create an index for our storage location by passing it through our hashing function
    let index = this.hashFunc(key, this.#capacity);
    //get the bucket at this particular index in our storage, if one exists
    //[[ [k,v], [k,v], [k,v] ] , [ [k,v], [k,v] ]  [ [k,v] ] ]
    //does a bucket exist or do we get undefined when trying to get said index?
    if (!this.#storage[index]) {
      //create the bucket
      //set the bucket into our HashMap
      this.#storage[index] = [];
    }

    let bucket = this.#storage[index];

    //now iterate through our bucket to see if there are any conflicting
    //key value pairs within our bucket. If there are any, override them.
    for (let i = 0; i < bucket.length; i++) {
      let pair = bucket[i];
      if (pair[0] === key) {
        //overide value stored at this key
        pair[1] = value;
        return;
      }
    }

    // create a new pair in our bucket
    // At this point, this could either be the new empty bucket we created above
    // or a bucket with other pairs with keys that are different than
    // the key of the pair we are inserting. These pairs are in the
    // same bucket because their keys all equate to the same numeric index when
    // passing through our hash function.
    bucket.push([key, value]);
    this.#count++;
    // now that we've added our new key/val pair to our storage
    // let's check to see if we need to resize our storage
    if (this.#count >= this.#capacity) {
      this.resize(this.#capacity * 2);
    }
    return;
  }

  delete(key) {
    let index = this.hashFunc(key, this.#capacity);
    let bucket = this.#storage[index];
    if (!bucket) {
      return null;
    }
    //iterate over the bucket
    for (let i = 0; i < bucket.length; i++) {
      let pair = bucket[i];
      //check to see if key is inside bucket
      if (pair[0] === key) {
        //if it is, get rid of this pair
        this.#storage[index] = [...bucket.slice(0, i), ...bucket.slice(i + 1)];
        this.#count--;

        // this is a bonus, but we will resize down when there are enough deletions
        if (this.#count < this.#capacity / 0.5) {
          this.resize(this.#capacity / 2);
        }
        return pair;
      }
    }
  }

  get(key) {
    let index = this.hashFunc(key, this.#capacity);
    let bucket = this.#storage[index];

    if (!bucket) {
      return null;
    }

    for (let i = 0; i < bucket.length; i++) {
      let pair = bucket[i];
      if (pair[0] === key) {
        return pair[1];
      }
    }

    return null;
  }

  hashFunc(str, max) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      let letter = str[i];
      hash = (hash << 5) + letter.charCodeAt(0);
      hash = (hash & hash) % max;
    }
    return hash;
  }

  resize(newLimit) {
    let oldStorage = this.#storage;

    this.#capacity = newLimit;
    this.#count = 0;
    this.#storage = [];

    oldStorage.forEach((bucket) => {
      if (!bucket) {
        return;
      }
      for (let i = 0; i < bucket.length; i++) {
        let pair = bucket[i];
        this.set(pair[0], pair[1]);
      }
    });
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
