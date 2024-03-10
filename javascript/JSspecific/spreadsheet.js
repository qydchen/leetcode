/*Your task is to create a representation of a spreadsheet:
- a spreadsheet should have finitely many columns (specified as string-names at creation)
- a spreadsheet should have infinitely many rows (numbered, starting at 0)
- each cell contains a number, defaulting to 0
- you should be able to:
  - set the value of a cell
  - get the value of a cell
  - print out the first N rows of the spreadsheet (don’t worry too much about making this pretty)

  +------+--------+--------+--------+
|      | "fips" | "pop"  | "area" |
+======+========+========+========+
| 0    | 1001   | 200000 | 5000   |
+------+--------+--------+--------+
| 1    | 0      | 0      | 0      |
+------+--------+--------+--------+
| 2    | 0      | 0      | 0      |
+------+--------+--------+--------+
| 3    | 0      | 0      | 0      |
+------+--------+--------+--------+
| 4    | 0      | 0      | 0      |
+------+--------+--------+--------+
| 5    | 1002   | 0      | 0      |
+------+--------+--------+--------+
| ...  | ...    | ...    | ...    |

Please add the capability to set a cell to a formula referencing other cells. An example formula might be stated as "column A, row 1 plus column B, row 2". You can assume that a simple "plus" is the only operation we need to support and that the row and column of the two referenced cells are each passed as separate arguments.
  */

// {
// column: {"fips": 0, "pop": 1, "area": 2},
// 0: {"fips": 1001, "pop":200000,"area": 5000}
//}

class Spreadsheet {
  constructor(columns) {
    this.columns = columns;
    this.columnMap = {};
    this.rows = {};
    for (let i = 0; i < columns.length; i++) {
      this.columnMap[columns[i]] = i;
    }
  }
  set(row, column, value) {
    if (!(row in this.rows)) {
      this.rows[row] = {};
      for (let column of this.columns) {
        this.rows[row][column] = 0;
      }
    }
    let rowObj = this.rows[row];
    rowObj[column] = value;
  }
  setFormula(row, column, argrow1, argcol1, argrow2, argcol2) {
    let callback = (memo) => {
      return (
        this.get(argrow1, argcol1, memo) + this.get(argrow2, argcol2, memo)
      );
    };
    this.set(row, column, callback);
  }
  get(row, column, visited = {}) {
    if (!(row in this.rows)) return 0;
    const memoKey = serialize(row, column);
    if (memoKey in visited) {
      throw new Error(`circular reference in ${memoKey}`);
    }
    const maybeValOrFunc = this.rows[row][column];
    visited[memoKey] = true;
    if (typeof maybeValOrFunc === "function") {
      return maybeValOrFunc(visited);
    } else {
      return maybeValOrFunc;
    }
  }
  printFirstN(n) {
    console.log([""].concat(this.columns));
    for (let i = 0; i <= n; i++) {
      const rowValues = Object.values(
        this.rows?.[i] ?? new Array(this.columns.length).fill(0)
      );
      const out = rowValues.map((_, j) => this.get(i, this.columns[j]));
      console.log([i, ...out]);
    }
  }
  printColumn() {
    console.log(this.columnMap);
  }
  printRows() {
    console.log(this.rows);
  }
}

function serialize(row, column) {
  return `${row},${column}`;
}

let my_spreadsheet = new Spreadsheet(["fips", "pop", "area"]);

my_spreadsheet.set(0, "fips", 1001);
my_spreadsheet.set(0, "pop", 200000);
my_spreadsheet.set(0, "area", 5000);
my_spreadsheet.set(5, "fips", 1002);
console.log(my_spreadsheet.get(0, "fips")); // 1001
console.log(my_spreadsheet.get(0, "area")); // 5000
console.log(my_spreadsheet.get(1, "fips")); // 0
console.log(my_spreadsheet.get(1, "area")); // 0
console.log(my_spreadsheet.get(5, "fips")); // 1002
console.log(my_spreadsheet.get(5, "area")); // 0
my_spreadsheet.setFormula(2, "fips", 0, "fips", 0, "pop"); // 201001
my_spreadsheet.setFormula(3, "fips", 2, "fips", 0, "pop"); // 401001
my_spreadsheet.setFormula(4, "fips", 3, "fips", 2, "fips"); // 401001
my_spreadsheet.setFormula(3, "fips", 4, "fips", 2, "fips");
my_spreadsheet.printFirstN(10);
