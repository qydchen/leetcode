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
    return [...this.#parse(this.json)];
  };

  #parse = (data) => {
    let out = [];
    const t = this.#getType(data);
    if (t === "object") {
      const start = this.tokenize("start-object");
      out.push(start);
      for (const key in data) {
        const val = data[key];
        const field = this.tokenize("field-name", key);
        const nested = this.#parse(val);
        out = [...out, field, ...nested];
      }
      const endObj = this.tokenize("end-object");
      out.push(endObj);
    } else if (t === "array") {
      const startArray = this.tokenize("start-array");
      const arrTokens = data.flatMap((v) => this.#parse(v));
      const endArray = this.tokenize("end-array");
      out = [...out, startArray, ...arrTokens, endArray];
    } else {
      const valType = this.tokenize(t, data);
      out.push(valType);
    }

    return out;
  };

  #getType = (value) => {
    if (Array.isArray(value)) return "array";
    if (value === null) return "null";
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

let json4 = new Jason([]);
let expected4 = [{ type: "start-array" }, { type: "end-array" }];
assert.deepStrictEqual(json4.parse(), expected4);

let json5 = new Jason(["abc", null, false, 123]);
let expected5 = [
  { type: "start-array" },
  { type: "string", val: "abc" },
  { type: "null" },
  { type: "boolean" },
  { type: "number", val: 123 },
  { type: "end-array" },
];
assert.deepStrictEqual(json5.parse(), expected5);

let json6 = new Jason(["abc", null, false, 123, obj]);
let expected6 = [
  { type: "start-array" },
  { type: "string", val: "abc" },
  { type: "null" },
  { type: "boolean" },
  { type: "number", val: 123 },
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
  { type: "end-array" },
];
assert.deepStrictEqual(json6.parse(), expected6);

let json7 = new Jason("abc");
let expected7 = [{ type: "string", val: "abc" }];
assert.deepStrictEqual(
  json7.parse(),
  expected7,
  "should work for scalar types"
);

let json8 = new Jason(null);
let expected8 = [{ type: "null" }];
assert.deepStrictEqual(json8.parse(), expected8, "should work for null types");
