class Employee {
  constructor(name, age, address, department, manager) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.department = department;
    this.manager = manager;
  }
}

Employee.prototype.isFired = false;
Employee.prototype.motto = 'Hello';

const fred = new Employee('Fred', 22, '123 Fake st', 'CS', {name: 'Ted', manager_id: 42});
// Do not include the prototype properties

function lookUp(obj) {
  let res = [];
  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      res = obj[k] instanceof Object ? res.concat(lookUp(obj[k])) : res.concat(`${k}: ${obj[k]}`);
    }
  }
  return res.join(", ");
}

console.log(lookUp(fred)) // => [Fred,22,123 Fake st, CS, Ted, 42]
