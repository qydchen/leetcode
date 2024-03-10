var assert = require("assert");
// Basically, you need to define the required classes and parameters yourself and then complete the token parse

// We'd like to parse a JSON string into a data structure that we can inspect and modify.
// Well-known examples of this include JavaScript's JSON.parse, Python's json module, or Java's Jackson library.
// Traditionally, there are two modules in this process: lexing and parsing. The lexer transforms the input string
// into a list of tokens, and the parser consumes the tokens to produce a data structure (i.e., class object AST)
// representing the input string. For this problem, we'll implement the parser component for JSON. That is given a
// list of tokens that represent a valid JSON object, we'd like to produce an in-memory representation that we can
// inspect and modify.

// Here's a basic JSON object followed by the list of tokens representing it:

// JSON Object:
// {"a": 10, "b": "foo"}

// List of Tokens:
// [
//     {"type": "start-object"},
//     {"type": "field-name", "val": "a"},
//     {"type": "number", "val": 10},
//     {"type": "field-name", "val": "b"},
//     {"type": "string", "val": "foo"},
//     {"type": "end-object"}
// ]

// Another example JSON Object and List of Tokens:
// {
//     "a": 10,
//     "b": "foo",
//     "c": [null, true],
//     "d": {
//         "e": {
//             "f": "nested"
//         }
//     }
// }

// List of Tokens:
// [
//     {"type": "start-object"},
//     {"type": "field-name", "val": "a"},
//     {"type": "number", "val": 10},
//     {"type": "field-name", "val": "b"},
//     {"type": "string", "val": "foo"},
//     {"type": "field-name", "val": "c"},
//     {"type": "start-array"},
//     {"type": "null"},
//     {"type": "boolean", "val": true},
//     {"type": "end-array"},
//     {"type": "field-name", "val": "d"},
//     {"type": "start-object"},
//     {"type": "field-name", "val": "e"},
//     {"type": "start-object"},
//     {"type": "field-name", "val": "f"},
//     {"type": "string", "val": "nested"},
//     {"type": "end-object"},
//     {"type": "end-object"},
//     {"type": "end-object"}
// ]

class Jason {
  constructor(jsonObject) {
    this.json = jsonObject;
  }

  parse = () => {
    return [
      this.tokenize("start-object"),
      ...this._parse(this.json),
      this.tokenize("end-object"),
    ];
  };

  _parse = (obj) => {
    let out = [];
    for (let key in obj) {
      let val = obj[key];
      const type = this.#getType(val);
      const field = this.tokenize("field-name", key);
      out.push(field);
      if (type === "object") {
        const start = this.tokenize("start-object");
        out.push(start);
        const nested = this._parse(val);
        out = [...out, ...nested];
        const endType = this.tokenize("end-object");
        out.push(endType);
      } else if (type === "array") {
        const startArray = this.tokenize("start-array");
        const arrTokens = val.map((v) => this.tokenize(this.#getType(v), v));
        const endArray = this.tokenize("end-array");
        out = [...out, startArray, ...arrTokens, endArray];
      } else {
        const valType = this.tokenize(type, val);
        out.push(valType);
      }
    }
    return out;
  };

  #getType = (value) => {
    // array, object, number, string, null, boolean
    if (Array.isArray(value)) return "array";
    if (value === null) return "null";
    if (value === undefined) return "undefined";
    return typeof value;
  };

  tokenize = (type, val) => {
    if (!val) return { type };
    return { type, val };
  };
}

let obj = {
  a: 10,
  b: "foo",
  c: [null, true],
  d: {
    e: {
      f: "nested",
    },
  },
};

let json = new Jason(obj);
let expected = [
  { type: "start-object" },
  { type: "field-name", val: "a" },
  { type: "number", val: 10 },
  { type: "field-name", val: "b" },
  { type: "string", val: "foo" },
  { type: "field-name", val: "c" },
  { type: "start-array" },
  { type: "null" },
  { type: "boolean", val: true },
  { type: "end-array" },
  { type: "field-name", val: "d" },
  { type: "start-object" },
  { type: "field-name", val: "e" },
  { type: "start-object" },
  { type: "field-name", val: "f" },
  { type: "string", val: "nested" },
  { type: "end-object" },
  { type: "end-object" },
  { type: "end-object" },
];

assert.deepStrictEqual(json.parse(), expected, "nested jsons should work");

let json1 = new Jason({ a: 10, b: "foo" });
let expected1 = [
  { type: "start-object" },
  { type: "field-name", val: "a" },
  { type: "number", val: 10 },
  { type: "field-name", val: "b" },
  { type: "string", val: "foo" },
  { type: "end-object" },
];
assert.deepStrictEqual(json1.parse(), expected1, "simple case");

let json2 = new Jason({});
let expected2 = [{ type: "start-object" }, { type: "end-object" }];
assert.deepStrictEqual(json2.parse(), expected2);

let json3 = new Jason({
  a: 10,
  b: "foo",
  c: true,
  d: null,
  e: undefined,
  f: {},
});
let expected3 = [
  { type: "start-object" },
  { type: "field-name", val: "a" },
  { type: "number", val: 10 },
  { type: "field-name", val: "b" },
  { type: "string", val: "foo" },
  { type: "field-name", val: "c" },
  { type: "boolean", val: true },
  { type: "field-name", val: "d" },
  { type: "null" },
  { type: "field-name", val: "e" },
  { type: "undefined" },
  { type: "field-name", val: "f" },
  { type: "start-object" },
  { type: "end-object" },
  { type: "end-object" },
];
assert.deepStrictEqual(json3.parse(), expected3);
