const palindrome1 = require("./index");
const palindrome2 = require("./index2");
const palindrome3 = require("./index3");

test("palindrome function is defined", () => {
  expect(typeof palindrome1).toEqual("function");
  expect(typeof palindrome2).toEqual("function");
  expect(typeof palindrome3).toEqual("function");
});

test('"aba" is a palindrome', () => {
  expect(palindrome1("aba")).toBeTruthy();
  expect(palindrome2("aba")).toBeTruthy();
  expect(palindrome3("aba")).toBeTruthy();
});

test('" aba" is not a palindrome', () => {
  expect(palindrome1(" aba")).toBeFalsy();
  expect(palindrome2(" aba")).toBeFalsy();
  expect(palindrome3(" aba")).toBeFalsy();
});

test('"aba " is not a palindrome', () => {
  expect(palindrome1("aba ")).toBeFalsy();
  expect(palindrome2("aba ")).toBeFalsy();
  expect(palindrome3("aba ")).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
  expect(palindrome1("greetings")).toBeFalsy();
  expect(palindrome2("greetings")).toBeFalsy();
  expect(palindrome3("greetings")).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
  expect(palindrome1("1000000001")).toBeTruthy();
  expect(palindrome2("1000000001")).toBeTruthy();
  expect(palindrome3("1000000001")).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
  expect(palindrome1("Fish hsif")).toBeFalsy();
  expect(palindrome2("Fish hsif")).toBeFalsy();
  expect(palindrome3("Fish hsif")).toBeFalsy();
});

test('"pennep" a palindrome', () => {
  expect(palindrome1("pennep")).toBeTruthy();
  expect(palindrome2("pennep")).toBeTruthy();
  expect(palindrome3("pennep")).toBeTruthy();
});
