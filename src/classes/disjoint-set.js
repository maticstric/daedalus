class DisjointSet {
  constructor(vals) {
    this.parents = {};
    this.ranks = {};
    this.numSets = vals.length;

    for (let i = 0; i < vals.length; i++) {
      let val = vals[i];
      this.parents[val] = val;
      this.ranks[val] = 0;
    }
  }

  union(val1, val2) {
    this.link(this.findSet(val1), this.findSet(val2));

    this.numSets -= 1;
  }

  link(root1, root2) {
    if (root1 === root2) {
      return;
    }

    if (this.ranks[root1] > this.ranks[root2]) {
      this.parents[root2] = root1;
    } else {
      this.parents[root1] = root2;

      if (this.ranks[root1] === this.ranks[root2]) {
        this.ranks[root2] += 1;
      }
    }
  }

  findSet(val) {
    if (this.parents[val] !== val) {
      this.parents[val] = this.findSet(this.parents[val]);
    }

    return this.parents[val];
  }
}

export default DisjointSet;
