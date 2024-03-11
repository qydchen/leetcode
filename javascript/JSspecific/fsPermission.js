const assert = require("assert");
// Each folder/document has parent and children, and the children level can also access it after adding
// permissions to the parent. Implement two functions: getPermission() and grantPermission().
// If a user has folder permissions, he also has all subordinate permissions.
// Implementation
// - grantPermission(item, user)
// - hasPermission(item, u‍‌‌‌‍‌‌‌‍‌‍‌‌‌‌‌‍‍‍‍‍ser)
// item can be a folder or a file
// Follow-up:
// Existing level classification, admin, edit, v‍‌‌‌‍‍‌‌‌‍‌‍‌‌‌‌‌‍‍‍iew, how to implement it.

class FileSystem {
  constructor() {
    this.root = "root";
    this.perms = {}; // key: user, value: set<perm>()
    this.fs = {
      root: ["etc", "sbin", "bin", "tmp", "var"],
      etc: [
        "rpc",
        "paths",
        "hosts",
        "group",
        "gettytab",
        "zshrc",
        "syslog.conf",
        "pf.os",
      ],
      tmp: ["steam.pipe", "gameover.log", "perfcount"],
      perfcount: ["pfcount2045.natd", "perfname2045.natd"],
      sbin: [
        "apfs_hfs_convert",
        "fsck_apfs",
        "fstyp_hfs",
        "disklabel",
        "fsck_exfat",
      ],
      bin: [
        "chmod",
        "rm",
        "rmdir",
        "zsh",
        "cp",
        "date",
        "kill",
        "mkdir",
        "cat",
      ],
      var: ["backups", "empty", "lib"],
    };
  }

  grantPermission = (item, user) => {
    if (!(user in this.perms)) {
      this.perms[user] = new Set();
    }
    this.perms[user].add(item);
  };

  hasPermission = (item, user) => {
    if (this.perms[user]?.has(item)) return true;
    const hasPerm = this.#dfs(item, this.root, false, user);
    return hasPerm;
  };

  #dfs = (target, node, hasPerm, user) => {
    if (this.perms[user]?.has(node)) {
      hasPerm = true;
    }
    if (target === node) {
      // if target is found, the topdown recursion should keep track of if parent has perm
      return hasPerm;
    }

    for (let child of this.fs[node]) {
      let found = this.#dfs(target, child, hasPerm, user);
      if (found) return found;
    }
    return hasPerm;
  };
}

const fs = new FileSystem();

fs.grantPermission("cat", "david");

assert.equal(fs.hasPermission("cat", "david"), true);
assert.equal(fs.hasPermission("mkdir", "david"), false);
fs.grantPermission("mkdir", "david");
assert.equal(fs.hasPermission("mkdir", "david"), true);
assert.equal(fs.hasPermission("bin", "david"), false);
assert.equal(fs.hasPermission("root", "david"), false);

assert.equal(fs.hasPermission("pfcount2045.natd", "david"), false);
assert.equal(fs.hasPermission("perfname2045.natd", "david"), false);

fs.grantPermission("perfcount", "david");
assert.equal(fs.hasPermission("pfcount2045.natd", "david"), true);
assert.equal(fs.hasPermission("perfname2045.natd", "david"), true);

assert.deepStrictEqual(
  [
    "apfs_hfs_convert",
    "fsck_apfs",
    "fstyp_hfs",
    "disklabel",
    "fsck_exfat",
    "pfcount2045.natd",
    "root",
    "etc",
    "tmp",
  ].map((file) => {
    return fs.hasPermission(file, "rootusr");
  }),
  new Array(9).fill(false)
);

fs.grantPermission("root", "rootusr");
assert.deepStrictEqual(
  [
    "apfs_hfs_convert",
    "fsck_apfs",
    "fstyp_hfs",
    "disklabel",
    "fsck_exfat",
    "pfcount2045.natd",
    "root",
    "etc",
    "tmp",
  ].map((file) => {
    return fs.hasPermission(file, "rootusr");
  }),
  new Array(9).fill(true)
);

fs.grantPermission("asdf", "joe");
assert.deepStrictEqual(
  [
    "apfs_hfs_convert",
    "fsck_apfs",
    "fstyp_hfs",
    "disklabel",
    "fsck_exfat",
    "pfcount2045.natd",
    "root",
    "etc",
    "tmp",
  ].map((file) => {
    return fs.hasPermission(file, "joe");
  }),
  new Array(9).fill(false)
);
