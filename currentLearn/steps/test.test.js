const steps = require("./index");
const steps2 = require("./index2");
const steps3 = require("./index3");

beforeEach(() => {
  jest.spyOn(console, "log");
});

afterEach(() => {
  console.log.mockRestore();
});

test("steps is a function", () => {
  expect(typeof steps).toEqual("function");
  expect(typeof steps2).toEqual("function");
  expect(typeof steps3).toEqual("function");
});

test("steps called with n = 1", () => {
  steps(1);
  expect(console.log.mock.calls[0][0]).toEqual("#");
  expect(console.log.mock.calls.length).toEqual(1);
});

test("steps called with n = 2", () => {
  steps(2);
  expect(console.log.mock.calls[0][0]).toEqual("# ");
  expect(console.log.mock.calls[1][0]).toEqual("##");
  expect(console.log.mock.calls.length).toEqual(2);
});

test("steps called with n = 3", () => {
  steps(3);
  expect(console.log.mock.calls[0][0]).toEqual("#  ");
  expect(console.log.mock.calls[1][0]).toEqual("## ");
  expect(console.log.mock.calls[2][0]).toEqual("###");
  expect(console.log.mock.calls.length).toEqual(3);
});
test("steps 2 called with n = 1", () => {
  steps2(1);
  expect(console.log.mock.calls[0][0]).toEqual("#");
  expect(console.log.mock.calls.length).toEqual(1);
});

test("steps 2 called with n = 2", () => {
  steps2(2);
  expect(console.log.mock.calls[0][0]).toEqual("# ");
  expect(console.log.mock.calls[1][0]).toEqual("##");
  expect(console.log.mock.calls.length).toEqual(2);
});

test("steps 2 called with n = 3", () => {
  steps2(3);
  expect(console.log.mock.calls[0][0]).toEqual("#  ");
  expect(console.log.mock.calls[1][0]).toEqual("## ");
  expect(console.log.mock.calls[2][0]).toEqual("###");
  expect(console.log.mock.calls.length).toEqual(3);
});
test("steps 3 called with n = 1", () => {
  steps3(1);
  expect(console.log.mock.calls[0][0]).toEqual("#");
  expect(console.log.mock.calls.length).toEqual(1);
});

test("steps 3 called with n = 2", () => {
  steps3(2);
  expect(console.log.mock.calls[0][0]).toEqual("# ");
  expect(console.log.mock.calls[1][0]).toEqual("##");
  expect(console.log.mock.calls.length).toEqual(2);
});

test("steps 3 called with n = 3", () => {
  steps3(3);
  expect(console.log.mock.calls[0][0]).toEqual("#  ");
  expect(console.log.mock.calls[1][0]).toEqual("## ");
  expect(console.log.mock.calls[2][0]).toEqual("###");
  expect(console.log.mock.calls.length).toEqual(3);
});
