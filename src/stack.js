class Stack {
  constructor(maxLength) {
    this.maxLength = maxLength;
    this.data = [];
    this.pointer = 0;
  }

  push(value) {
    if(this.data.length + 1 > this.maxLength) {
      throw("stack overflow");
    }
    this.data.push(value);
    this.pointer += 1;
  }

  pop() {
    this.pointer -= 1;
    return this.data.pop();
  }

  clear() {
    this.data = [];
  }
}

module.exports = Stack;
