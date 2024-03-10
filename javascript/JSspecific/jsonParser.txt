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
    const tokenList = this.lex();
    return this.#parse(tokenList);
  };

  #parse = (tokens) => {
    const stack = [];
    let out = null;
    for (let token of tokens) {
      if (token.type === "start-object") {
        if (!out) {
          out = {};
          stack.push(out);
        } else {
          stack.push({});
        }
      } else if (token.type.includes("end")) {
        const token1 = stack.pop();
        if (Array.isArray(stack.at(-1))) {
          stack.at(-1).push(token1);
        } else {
          const token2 = stack.pop();
          if (token2) {
            stack.at(-1)[token2] = token1;
          }
        }
      } else if (token.type === "start-array") {
        if (!out) {
          out = [];
          stack.push(out);
        } else {
          stack.push([]);
        }
      } else if (token.type === "field-name") {
        stack.push(token.val);
      } else {
        const val = token.type === "null" ? null : token.val;
        if (Array.isArray(stack.at(-1))) {
          stack.at(-1).push(val);
        } else {
          if (stack.length) {
            const key = stack.pop();
            stack.at(-1)[key] = val;
          } else {
            return val;
          }
        }
      }
    }
    return out;
  };

  lex = () => {
    return [...this.#lex(this.json)];
  };

  #lex = (data) => {
    let out = [];
    const t = this.#getType(data);
    if (t === "object") {
      const start = this.#tokenize("start-object");
      out.push(start);
      for (const key in data) {
        const val = data[key];
        const field = this.#tokenize("field-name", key);
        const nested = this.#lex(val);
        out = [...out, field, ...nested];
      }
      const endObj = this.#tokenize("end-object");
      out.push(endObj);
    } else if (t === "array") {
      const startArray = this.#tokenize("start-array");
      const arrTokens = data.flatMap(this.#lex);
      const endArray = this.#tokenize("end-array");
      out = [...out, startArray, ...arrTokens, endArray];
    } else {
      const valType = this.#tokenize(t, data);
      out.push(valType);
    }

    return out;
  };

  #getType = (value) => {
    if (Array.isArray(value)) return "array";
    if (value === null) return "null";
    return typeof value;
  };

  #tokenize = (type, val) => {
    if (val == null) return { type };
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

assert.deepStrictEqual(json.lex(), expected, "nested jsons should work");
assert.deepStrictEqual(json.parse(), obj, "parsing nested tokens should work");

let json1 = new Jason({ a: 10, b: "foo" });
let expected1 = [
  { type: "start-object" },
  { type: "field-name", val: "a" },
  { type: "number", val: 10 },
  { type: "field-name", val: "b" },
  { type: "string", val: "foo" },
  { type: "end-object" },
];
assert.deepStrictEqual(json1.lex(), expected1, "simple case should work");
assert.deepStrictEqual(
  json1.parse(),
  { a: 10, b: "foo" },
  "parsing simple case should work"
);

let json2 = new Jason({});
let expected2 = [{ type: "start-object" }, { type: "end-object" }];
assert.deepStrictEqual(json2.lex(), expected2, "empty object case should work");
assert.deepStrictEqual(json2.parse(), {}, "empty object case should work");

const obj3 = {
  a: 10,
  b: "foo",
  c: true,
  d: null,
  f: {},
};
let json3 = new Jason(obj3);
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
  { type: "field-name", val: "f" },
  { type: "start-object" },
  { type: "end-object" },
  { type: "end-object" },
];
assert.deepStrictEqual(json3.lex(), expected3);
assert.deepStrictEqual(json3.parse(), obj3);

let json4 = new Jason([]);
let expected4 = [{ type: "start-array" }, { type: "end-array" }];
assert.deepStrictEqual(json4.lex(), expected4, "empty array should work");
assert.deepStrictEqual(json4.parse(), [], "empty array should work");

let json5 = new Jason(["abc", null, false, 123]);
let expected5 = [
  { type: "start-array" },
  { type: "string", val: "abc" },
  { type: "null" },
  { type: "boolean", val: false },
  { type: "number", val: 123 },
  { type: "end-array" },
];
assert.deepStrictEqual(json5.lex(), expected5);
assert.deepStrictEqual(json5.parse(), ["abc", null, false, 123]);

let obj6 = ["abc", null, false, 123, obj];
let json6 = new Jason(obj6);
let expected6 = [
  { type: "start-array" },
  { type: "string", val: "abc" },
  { type: "null" },
  { type: "boolean", val: false },
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
assert.deepStrictEqual(
  json6.lex(),
  expected6,
  "complex array case with object should work"
);
assert.deepStrictEqual(
  json6.parse(),
  obj6,
  "complex array case with object should work"
);

let json7 = new Jason("abc");
let expected7 = [{ type: "string", val: "abc" }];
assert.deepStrictEqual(json7.lex(), expected7, "should work for scalar types");
assert.deepStrictEqual(json7.parse(), "abc", "should work for scalar types");

let json8 = new Jason(null);
let expected8 = [{ type: "null" }];
assert.deepStrictEqual(json8.lex(), expected8, "should work for null types");
assert.deepStrictEqual(json8.parse(), null, "should work for null types");

let json9 = new Jason([1, 2, 3, [4, 5, 6, [7, 8, 9], [false, true, null]]]);
let expected9 = [
  { type: "start-array" },
  { type: "number", val: 1 },
  { type: "number", val: 2 },
  { type: "number", val: 3 },
  { type: "start-array" },
  { type: "number", val: 4 },
  { type: "number", val: 5 },
  { type: "number", val: 6 },
  { type: "start-array" },
  { type: "number", val: 7 },
  { type: "number", val: 8 },
  { type: "number", val: 9 },
  { type: "end-array" },
  { type: "start-array" },
  { type: "boolean", val: false },
  { type: "boolean", val: true },
  { type: "null" },
  { type: "end-array" },
  { type: "end-array" },
  { type: "end-array" },
];
assert.deepStrictEqual(json9.lex(), expected9, "should work for nested arrays");
assert.deepStrictEqual(
  json9.parse(),
  [1, 2, 3, [4, 5, 6, [7, 8, 9], [false, true, null]]],
  "should work for nested arrays"
);

const obj10 = { a: { b: { c: {} } }, d: {} };

let json10 = new Jason(obj10);
let expected10 = [
  { type: "start-object" },
  { type: "field-name", val: "a" },
  { type: "start-object" },
  { type: "field-name", val: "b" },
  { type: "start-object" },
  { type: "field-name", val: "c" },
  { type: "start-object" },
  { type: "end-object" },
  { type: "end-object" },
  { type: "end-object" },
  { type: "field-name", val: "d" },
  { type: "start-object" },
  { type: "end-object" },
  { type: "end-object" },
];
assert.deepStrictEqual(json10.lex(), expected10, "should work for nested objs");
assert.deepStrictEqual(json10.parse(), obj10, "should work for nested objs");
