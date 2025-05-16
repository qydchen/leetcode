const HashMap = require("../hashmap-modern.js");

describe("HashMap", () => {
  let map;

  beforeEach(() => {
    map = new HashMap();
  });

  test("should set and get a value", () => {
    map.set("key1", "value1");
    expect(map.get("key1")).toBe("value1");
  });

  test("should override a value with the same key", () => {
    map.set("key1", "value1");
    map.set("key1", "value2");
    expect(map.get("key1")).toBe("value2");
  });

  test("should return null for a non-existent key", () => {
    expect(map.get("nonExistentKey")).toBeNull();
  });

  test("should delete a key-value pair", () => {
    map.set("key1", "value1");
    expect(map.delete("key1")).toEqual(["key1", "value1"]);
    expect(map.get("key1")).toBeNull();
  });

  test("should return null when deleting a non-existent key", () => {
    expect(map.delete("nonExistentKey")).toBeNull();
  });

  test("should resize the storage when capacity is exceeded", () => {
    map.set("key1", "value1");
    map.set("key2", "value2");
    map.set("key3", "value3");
    map.set("key4", "value4");
    expect(map.diagnostics.capacity).toBe(8); // Capacity should double
  });

  test("should resize down when enough deletions occur", () => {
    map.set("key1", "value1");
    map.set("key2", "value2");
    map.set("key3", "value3");
    map.set("key4", "value4");
    map.delete("key1");
    map.delete("key2");
    expect(map.diagnostics.capacity).toBe(4); // Capacity should halve
  });
});
