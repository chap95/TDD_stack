const Stack = require("../stack.js");

describe("test stack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack(10);
  });

  it("stack - push", () => {
    stack.push("a");
    expect(stack[0]).toBe("a");
  });

  it("stack - pop", () => {
    stack.push("b");
    expect(stack.pop()).toBe("b");
  });
});
