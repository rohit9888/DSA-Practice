class Stack {
  constructor() {
    this.arr = [];
  }
  push(...element) {
    return this.arr.push(...element);
  }
  pop() {
    return this.arr.pop();
  }
  peek() {
    return this.arr[this.arr.length - 1];
  }
  isEmpty() {
    return this.arr.length === 0;
  }
  print() {
    return console.log(this.arr);
  }
}
function reverseEqn(s) {
  const stack = new Stack();
  var result = "";
  for (var i = s.length-1; i >=0; i--) {
    if (s[i] >= "0" && s[i] <= "9") {
      stack.push(s[i]);
    } else {
      while (!stack.isEmpty()) {
        result += stack.peek();
        stack.pop();
    }
    result += s[i];
    }
  }
  console.log(stack);
  while (!stack.isEmpty()) {
    result += stack.peek();
    stack.pop();
  }
  return result;
}
const x = reverseEqn("5+2*56-2/4");
console.log({ x });
