const vowels = require("./index");
const vowels2 = require("./index2");

test("Vowels is a function", () => {
  expect(typeof vowels).toEqual("function");
  expect(typeof vowels2).toEqual("function");
});

test("returns the number of vowels used", () => {
  expect(vowels("aeiou")).toEqual(5);
  expect(vowels2("aeiou")).toEqual(5);
});

test("returns the number of vowels used when they are capitalized", () => {
  expect(vowels("AEIOU")).toEqual(5);
  expect(vowels2("AEIOU")).toEqual(5);
});

test("returns the number of vowels used", () => {
  expect(vowels("abcdefghijklmnopqrstuvwxyz")).toEqual(5);
  expect(vowels2("abcdefghijklmnopqrstuvwxyz")).toEqual(5);
});

test("returns the number of vowels used", () => {
  expect(vowels("bcdfghjkl")).toEqual(0);
  expect(vowels2("bcdfghjkl")).toEqual(0);
});
