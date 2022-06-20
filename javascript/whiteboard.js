class HashMap {
  #storage = [];
  #count = 0;
  #capacity = 8;
  insert(key, value) {
    //create an index for our storage location by passing it through our hashing function
    var index = this.hashFunc(key, this.#capacity);
    //retrieve the bucket at this particular index in our storage, if one exists
    //[[ [k,v], [k,v], [k,v] ] , [ [k,v], [k,v] ]  [ [k,v] ] ]
    var bucket = this.#storage[index];
    //does a bucket exist or do we get undefined when trying to retrieve said index?
    if (!bucket) {
      //create the bucket
      var bucket = [];
      //insert the bucket into our hashTable
      this.#storage[index] = bucket;
    }

    var override = false;
    //now iterate through our bucket to see if there are any conflicting
    //key value pairs within our bucket. If there are any, override them.
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === key) {
        //overide value stored at this key
        tuple[1] = value;
        override = true;
      }
    }

    if (!override) {
      //create a new tuple in our bucket
      //note that this could either be the new empty bucket we created above
      //or a bucket with other tupules with keys that are different than
      //the key of the tuple we are inserting. These tupules are in the same
      //bucket because their keys all equate to the same numeric index when
      //passing through our hash function.
      bucket.push([key, value]);
      this.#count++;
      //now that we've added our new key/val pair to our storage
      //let's check to see if we need to resize our storage
      if (this.#count > this.#capacity * 0.75) {
        this.resize(this.#capacity * 2);
      }
    }
    return this;
  }

  remove(key) {
    var index = this.hashFunc(key, this.#capacity);
    var bucket = this.#storage[index];
    if (!bucket) {
      return null;
    }
    //iterate over the bucket
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      //check to see if key is inside bucket
      if (tuple[0] === key) {
        //if it is, get rid of this tuple
        bucket.splice(i, 1);
        this.#count--;
        if (this.#count < this.#capacity * 0.25) {
          this._resize(this.#capacity / 2);
        }
        return tuple[1];
      }
    }
  }

  retrieve(key) {
    var index = this.hashFunc(key, this.#capacity);
    var bucket = this.#storage[index];

    if (!bucket) {
      return null;
    }

    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === key) {
        return tuple[1];
      }
    }

    return null;
  }

  hashFunc(str, max) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      var letter = str[i];
      hash = (hash << 5) + letter.charCodeAt(0);
      hash = (hash & hash) % max;
    }
    return hash;
  }

  resize(newLimit) {
    var oldStorage = this.#storage;

    this.#capacity = newLimit;
    this.#count = 0;
    this.#storage = [];

    oldStorage.forEach(
      function (bucket) {
        if (!bucket) {
          return;
        }
        for (var i = 0; i < bucket.length; i++) {
          var tuple = bucket[i];
          this.insert(tuple[0], tuple[1]);
        }
      }.bind(this)
    );
  }
}
