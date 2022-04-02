const Stack = require("../stack.js");

describe("test stack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack(10);
  });

  it("stack - push", () => {
    stack.push("a");
    expect(stack.data[0]).toBe("a");
  });

  it("stack - pop", () => {
    stack.push("b");
    expect(stack.pop()).toBe("b");
  });

  it("stack - clear ", () => {
    stack.push("c");
    stack.clear();
    expect(stack.data.length).toBe(0);
  })

  it("stack - overflow ", () => {
    for(let i = 1; i <= 10; i++) {
      stack.push(i);
    }

    expect(() => {
      stack.push(11)
    }).toThrow("stack overflow")
  })
   
});
