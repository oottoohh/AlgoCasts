const mergesortArray = require("./index");

test("merge sort array function is defined", () => {
  expect(typeof mergesortArray).toEqual("function");
});

test("merge sort array testing 1", () => {
  expect(mergesortArray([1], 1, [], 0)).toEqual([1]);
});
test("merge sort array testing 2", () => {
  expect(mergesortArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([
    1, 2, 2, 3, 5, 6,
  ]);
});
test("merge sort array testing 3", () => {
  expect(mergesortArray([0], 0, [1], 1)).toEqual([1]);
});
