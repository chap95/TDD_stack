class Stack {
  constructor(maxLength) {
    this.maxLength = maxLength;
    this.data = [];
    this.pointer = 0;
  }

  push(value) {
    this.data.push(value);
    this.pointer += 1;
  }

  pop() {
    this.pointer -= 1;
    return this.data.pop();
  }
}

module.exports = Stack;
