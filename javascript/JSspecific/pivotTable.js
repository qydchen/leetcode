// A pivot table is a way to display aggregate or summarized values of an underlying table. A pivot table will typically pick some output column (e.g.
//   number of shirts sold) and aggregate it along several different axes (e.g. date of sale, color of shirt) so that patterns in the overall data can be made apparent.
//   Here's an example. Let's say we have a table that tracks shirt sales:
//   +----------+------------+-------+------+-------------+
//   | Store ID |    Date    | Color | Size | Shirts sold |
//   +----------+------------+-------+------+-------------+
//   | abcd1234 | 2021-05-25 |   red |   XS |           1 |
//   | abcd1234 | 2021-05-25 |  blue |    L |          20 |
//   | abcd1234 | 2021-05-25 | green |    M |         300 |
//   | abcd1234 | 2021-05-26 |   red |   XS |           4 |
//   | abcd1234 | 2021-05-26 | black |    S |          50 |
//   | 5678wxyz | 2021-05-25 |  blue |   XL |         600 |
//   | 5678wxyz | 2021-05-25 | green |    M |           7 |
//   | 5678wxyz | 2021-05-25 | black |    L |          80 |
//   | 5678wxyz | 2021-05-26 |  blue |    S |         900 |
//   | e1f9g2h8 | 2021-05-26 |   red |    S |           1 |
//   | e1f9g2h8 | 2021-05-27 | black |    M |          20 |
//   +----------+------------+-------+------+-------------+
//   We might want to know how many shirts of each color we sold on each day. Here's a pivot table that will tell us that information:
//   +--------------------+------------+------------+------------+
//   | Sum of shirts sold | 2021-05-25 | 2021-05-26 | 2021-05-27 |
//   +--------------------+------------+------------+------------+
//   |                red |          1 |          5 |          0 |
//   |               blue |        620 |        900 |          0 |
//   |              green |        307 |          0 |          0 |
//   |              black |         80 |         50 |         20 |
//   +--------------------+------------+------------+------------+
//   We've chosen to lay out the date on the x axis and the shirt color on t‍‌‌‌‍‍‌‌‌‍‌‍‌‌‌‌‌‍‍‍‍he y axis.
// Each cell is the total number of shirts of that color sold on that day. We ignore all other columns (Store ID, Size).
//
// Your task is to implement a function that takes in a normal table and a specification of how
// the pivot table should be constructed and returns the resulting pivot table. For this first part, let's
// assume that a pivot table specification includes the name of the column to be aggregated, the name of the
//  column to use for the x axis, and the name of the column to use for the y axis.

class Sheet {
  constructor(table) {
    this.table = table;
  }

  #getOperationCb(operation) {
    switch (operation) {
      case "SUM":
        return (agg, el) => (agg ?? 0) + el;
      case "MAX":
        return (agg, el) => Math.max(agg ?? 0, el);
      case "MIN":
        return (agg, el) => Math.min(agg ?? Infinity, el);
      case "AVG":
        return (agg, el) => {
          let out = agg;
          if (!Array.isArray(agg)) {
            out = [[], undefined];
          }
          out[0].push(el);
          return [
            out[0],
            () => out[0].reduce((acc, el) => acc + el) / out[0].length,
          ];
        };
      case "COUNTDISTINCT":
        return (agg, el) => {
          let out = agg;
          if (!Array.isArray(agg)) {
            out = [new Set(), undefined];
          }
          out[0].add(el);
          return [out[0], () => out[0].size];
        };
      case "SUMPRODUCT":
        return (agg, el, ...cols) => {
          let out = agg;
          if (!Array.isArray(agg)) {
            out = [[], undefined];
          }
          out[0].push(el * cols.reduce((acc, el) => acc * el));
          return [out[0], () => out[0].reduce((a, c) => a + c)];
        };
    }
  }

  /**
   * @param {string} aggCol
   * @param {string} xCol
   * @param {string} yCol
   * @param {string} operation
   */
  pivot = (aggCol, xCol, yCol, operation = "SUM", ...otherArgs) => {
    let map = {};
    let rows = new Set(); // used to generate unique set of rows
    let cols = new Set(); // used to generate unique set of cols
    let cb = this.#getOperationCb(operation);
    for (let el of this.table) {
      let k = serialize(el[xCol], el[yCol]);
      if (!(k in map)) {
        map[k] = null;
      }
      // map the computation to the key k
      map[k] = cb(map[k], el[aggCol], ...otherArgs.map((c) => el[c]));
      // add rows and cols
      rows.add(el[xCol]);
      cols.add(el[yCol]);
    }

    const columns = Array.from(cols);
    // print first line
    console.log([`${operation} of ${aggCol.toLowerCase()}`, ...columns]);

    // for each row, go through each column and display the value by accessing map
    Array.from(rows).forEach((x) => {
      let data = columns.map((y) => {
        const key = serialize(x, y);
        return typeof map[key] !== "object" ? map[key] ?? 0 : map[key][1]();
      });
      console.log([x, ...data]);
    });
    console.log("----------------");
  };
}

function serialize(x, y) {
  return `${x}&${y}`;
}

const data = [
  {
    "Store ID": "abcd1234",
    Date: "2021-05-25",
    Color: "red",
    Size: "XS",
    "Shirts sold": 1,
    "Price per shirt": 20,
    TaxAdjustmentMultiplier: 1.0875,
  },
  {
    "Store ID": "abcd1234",
    Date: "2021-05-25",
    Color: "blue",
    Size: "L",
    "Shirts sold": 20,
    "Price per shirt": 20,
    TaxAdjustmentMultiplier: 1.0875,
  },
  {
    "Store ID": "abcd1234",
    Date: "2021-05-25",
    Color: "green",
    Size: "M",
    "Shirts sold": 300,
    "Price per shirt": 20,
    TaxAdjustmentMultiplier: 1.0875,
  },
  {
    "Store ID": "abcd1234",
    Date: "2021-05-26",
    Color: "red",
    Size: "XS",
    "Shirts sold": 4,
    "Price per shirt": 20,
    TaxAdjustmentMultiplier: 1.0875,
  },
  {
    "Store ID": "abcd1234",
    Date: "2021-05-26",
    Color: "black",
    Size: "S",
    "Shirts sold": 50,
    "Price per shirt": 20,
    TaxAdjustmentMultiplier: 1.0875,
  },
  {
    "Store ID": "5678wxyz",
    Date: "2021-05-25",
    Color: "blue",
    Size: "XL",
    "Shirts sold": 600,
    "Price per shirt": 20,
    TaxAdjustmentMultiplier: 1.0875,
  },
  {
    "Store ID": "5678wxyz",
    Date: "2021-05-25",
    Color: "green",
    Size: "M",
    "Shirts sold": 7,
    "Price per shirt": 20,
    TaxAdjustmentMultiplier: 1.0875,
  },
  {
    "Store ID": "5678wxyz",
    Date: "2021-05-25",
    Color: "black",
    Size: "L",
    "Shirts sold": 80,
    "Price per shirt": 20,
    TaxAdjustmentMultiplier: 1.0875,
  },
  {
    "Store ID": "5678wxyz",
    Date: "2021-05-26",
    Color: "blue",
    Size: "S",
    "Shirts sold": 900,
    "Price per shirt": 20,
    TaxAdjustmentMultiplier: 1.0875,
  },
  {
    "Store ID": "e1f9g2h8",
    Date: "2021-05-26",
    Color: "red",
    Size: "S",
    "Shirts sold": 1,
    "Price per shirt": 20,
    TaxAdjustmentMultiplier: 1.0875,
  },
  {
    "Store ID": "e1f9g2h8",
    Date: "2021-05-27",
    Color: "black",
    Size: "M",
    "Shirts sold": 20,
    "Price per shirt": 20,
    TaxAdjustmentMultiplier: 1.0875,
  },
];

let s = new Sheet(data);
s.pivot("Shirts sold", "Color", "Date", "SUM");
s.pivot("Shirts sold", "Color", "Date", "AVG");
s.pivot("Shirts sold", "Color", "Date", "MIN");
s.pivot("Shirts sold", "Color", "Date", "MAX");
s.pivot("Shirts sold", "Store ID", "Date", "SUM");
s.pivot("Shirts sold", "Store ID", "Color", "SUM");
s.pivot("Shirts sold", "Store ID", "Color", "MAX");
s.pivot("Shirts sold", "Store ID", "Color", "MIN");
s.pivot("Color", "Store ID", "Date", "COUNTDISTINCT");
s.pivot("Shirts sold", "Color", "Date", "SUMPRODUCT", "Price per shirt");
s.pivot(
  "Shirts sold",
  "Color",
  "Date",
  "SUMPRODUCT",
  "Price per shirt",
  "TaxAdjustmentMultiplier"
);