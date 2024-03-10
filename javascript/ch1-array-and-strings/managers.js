const org = (emps) => {
  let set = new Set(); // set of employees with no manager
  let adj = {};
  for (let emp of emps) {
    if (!emp.manager) {
      set.add(emp.name);
    }
    if (!(emp.name in adj)) {
      adj[emp.name] = [];
      if (emp.manager) {
        if (!(emp.manager.name in adj)) {
          adj[emp.manager.name] = [];
        }
        adj[emp.manager.name].push(emp.name);
      }
    }
  }
  let out = "";
  for (let name in adj) {
    if (set.has(name) && adj[name].length === 0) {
      out += name;
      out += "\n";
    } else if (adj[name].length > 0) {
      out += `${name} ->`;
      for (let subName of adj[name]) {
        out += ` ${subName}`;
      }
      out += "\n";
    }
  }
  return out;
};

const Emp = function (name) {
  this.name = name;
  this.manager = null;
};

const emps = "abcdef".split("").map((c) => new Emp(c));
emps[1].manager = emps[0];
emps[2].manager = emps[0];
emps[4].manager = emps[1];
emps[5].manager = emps[1];
console.log(org(emps));

//  a     d
// / \
// b  c
// /\
// e f
