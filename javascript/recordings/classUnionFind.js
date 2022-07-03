class UnionFind {
  constructor(size) {
    this.p = Array(size + 1)
      .fill()
      .map((_, i) => i);
  }

  find(x) {
    if (this.p[x] !== x) this.p[x] = this.find(this.p[x]);
    return this.p[x];
  }

  union(x, y) {
    x = this.find(x);
    y = this.find(y);
    if (x === y) {
      return false;
    }
    this.p[x] = y;
    return true;
  }
}
