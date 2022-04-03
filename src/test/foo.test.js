jest.mock("../foo.js");
const foo = require("../foo.js");
describe("foo", () => {
  foo.mockImplementation(() => 43);

  it("test - foo", () => {
    const result = foo();
    expect(result).toBe(43);
  });
});
