const chunk1 = require("./index");
const chunk2 = require("./index2");

test("function chunk exists", () => {
  expect(typeof chunk1).toEqual("function");
  expect(typeof chunk2).toEqual("function");
});

test("chunk divides an array of 10 elements with chunk size 2", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunked1 = chunk1(arr, 2);
  const chunked2 = chunk2(arr, 2);

  expect(chunked1).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]);
  expect(chunked2).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]);
});

test("chunk divides an array of 3 elements with chunk size 1", () => {
  const arr = [1, 2, 3];
  const chunked1 = chunk1(arr, 1);
  const chunked2 = chunk2(arr, 1);

  expect(chunked1).toEqual([[1], [2], [3]]);
  expect(chunked2).toEqual([[1], [2], [3]]);
});

test("chunk divides an array of 5 elements with chunk size 3", () => {
  const arr = [1, 2, 3, 4, 5];
  const chunked1 = chunk1(arr, 3);
  const chunked2 = chunk2(arr, 3);

  expect(chunked1).toEqual([
    [1, 2, 3],
    [4, 5],
  ]);
  expect(chunked2).toEqual([
    [1, 2, 3],
    [4, 5],
  ]);
});

test("chunk divides an array of 13 elements with chunk size 5", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const chunked1 = chunk1(arr, 5);
  const chunked2 = chunk2(arr, 5);

  expect(chunked1).toEqual([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13],
  ]);
  expect(chunked2).toEqual([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13],
  ]);
});
