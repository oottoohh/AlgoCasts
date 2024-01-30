const maxChar = require("./index");

test("maxChar function exists", () => {
  expect(typeof maxChar).toEqual("function");
});

test("Finds the most frequently used char", () => {
  expect(maxChar("a")).toEqual(["a", 1]);
  expect(maxChar("abcdefghijklmnaaaaa")).toEqual(["a", 6]);
});

test("Works with numbers in the string", () => {
  expect(maxChar("ab1c1d1e1f1g1")).toEqual(["1", 6]);
});
