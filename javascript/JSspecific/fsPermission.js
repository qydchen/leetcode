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

// type Filename = String;
// enum AccessLevel {
//   ADMIN,
//   EDIT,
//   VIEW,
// }
// type Permmission = Record<AccessLevel, Set<Filename>>

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
      rpc: [],
      paths: [],
      hosts: [],
      group: [],
      gettytab: [],
      zshrc: [],
      "syslog.conf": [],
      "pf.os": [],
      "pfcount2045.natd": [],
      "perfname2045.natd": [],
      backups: [],
      empty: [],
      lib: [],
      chmod: [],
      rm: [],
      rmdir: [],
      zsh: [],
      cp: [],
      date: [],
      kill: [],
      mkdir: [],
      cat: [],
      apfs_hfs_convert: [],
      fsck_apfs: [],
      fstyp_hfs: [],
      disklabel: [],
      fsck_exfat: [],
    };
  }

  grantPermission = (item, user, accessLevel = "VIEW") => {
    if (!(user in this.perms)) {
      this.perms[user] = { [accessLevel]: new Set() };
    }
    this.perms[user][accessLevel].add(item);
  };

  hasPermission = (item, user, accessLevel = "VIEW") => {
    if (this.perms[user]?.[accessLevel]?.has(item)) return true;
    return this.#dfs(item, this.root, user, false, accessLevel);
  };

  #dfs = (target, node, user, hasPerm, accessLevel) => {
    // base case: at a leaf node and did not find target, then return false
    if (!(node in this.fs)) return false;
    // base case: at found target, return the hasPerm boolean passed from parent
    if (target === node) return hasPerm;
    // check if the current node has permission
    if (!hasPerm) {
      hasPerm = this.perms[user]?.[accessLevel]?.has(node) ?? false;
    }
    // recursively check each file
    for (const child of this.fs[node]) {
      // if node is found, return the eval'd output, if true, then it is a node with permission
      const isFound = this.#dfs(target, child, user, hasPerm, accessLevel);
      if (isFound) return isFound;
    }
    // searched the entire tree of this node and no output
    return false;
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

fs.grantPermission("etc", "joe");
assert.deepStrictEqual(
  [
    "apfs_hfs_convert",
    "fsck_apfs",
    "fstyp_hfs",
    "disklabel",
    "fsck_exfat",
    "rpc",
    "paths",
    "hosts",
    "group",
  ].map((file) => {
    return fs.hasPermission(file, "joe");
  }),
  new Array(5).fill(false).concat(new Array(4).fill(true))
);

assert.equal(fs.hasPermission("afps_hfs_convert", "joe"), false);
assert.equal(fs.hasPermission("rpc", "joe"), true);

fs.grantPermission("cat", "testuser123", "ADMIN");
assert.equal(fs.hasPermission("cat", "testuser123", "ADMIN"), true);
assert.equal(fs.hasPermission("cat", "testuser123", "VIEW"), false);
assert.equal(fs.hasPermission("mkdir", "testuser123", "ADMIN"), false);
fs.grantPermission("mkdir", "testuser123", "ADMIN");
assert.equal(fs.hasPermission("mkdir", "testuser123", "ADMIN"), true);