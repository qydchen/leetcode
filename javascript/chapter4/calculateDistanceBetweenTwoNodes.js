/*
CEO
   ---- VP of Engineering
      | ---- Product Guy
      | ---- Janitor
            | ---- Josh
   ---- Dog
   ---- Finance Guy
*/

// interface Employee {
//   String name;
//   int id;
//   Array<Employee> report;
// }

class Employee {
    constructor(name, id, reports) {
        this.name = name;
        this.id = id;
        this.reports = reports;
    }
}

function calculateDistance(root, id1, id2) {
    const node1 = dfs(root, id1);
    const node2 = dfs(root, id2);
    const hist1 = getHistory(root, id1);
    const hist2 = getHistory(root, id2);
    console.log(("hist1", hist1));
    console.log(("hist2", hist2));
    const iterableLength = Math.min(hist1.length, hist2.length);
    let ancestorHeight = 0;
    for (let i = 0; i < iterableLength; i++) {
        if (hist1[i].id === hist2[i].id) {
            ancestorHeight = i;
        }
    }
    return node1.height + node2.height - 2 * ancestorHeight;
}

const dfs = (node, id, count = 0) => {
    if (!node) return null;
    node.height = count;
    if (node.id === id) return node;
    for (let child of node.reports) {
        const found = dfs(child, id, count + 1);
        if (found) return found;
    }
};

const getHistory = (node, id) => {
    const hist = [];
    const traverse = (node, id) => {
        if (!node) return null;
        hist.push(node);
        if (node.id === id) return node;
        for (let child of node.reports) {
            const found = traverse(child, id);
            if (found) {
                return found;
            }
        }
    };
    traverse(node, id);
    return hist;
};

const Dog = new Employee("Fido", 1, []);
const Janitor = new Employee("Jenitor", 3, [new Employee("Josh", 99, [])]);
const VPEngineering = new Employee("Ruben", 2, [
    Janitor,
    new Employee("Product Guy", 42, []),
]);
const CEO = new Employee("David", 0, [VPEngineering, Dog]);

// console.log(calculateDistance(CEO, 99, 2)); // => 2
// console.log(calculateDistance(CEO, 1, 0)); // => 1
// console.log(calculateDistance(CEO, 99, 42)); // =>  3

// console.log(dfs(CEO, 3));
// calculateDistance(CEO, 1, 3); // => 3
// console.log(getHistory(CEO, 3));
// console.log(getHistory(CEO, 99));
// console.log(getHistory(CEO, 2));
