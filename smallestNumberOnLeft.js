class Stack {
  constructor() {
    this.arr = [];
  }
  push(element) {
    return this.arr.push(element);
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
  length() {
    return this.arr.length;
  }
}

function leftSmaller(arr, n) {
    let output = [];
    const stack = new Stack();
    
    for (let i = 0; i < n; i++) {
        if (stack.isEmpty()) {
            output.push(-1);
            stack.push(arr[i]);
        } else if (arr[i] > stack.peek()) {
            output.push(stack.peek());
            stack.push(arr[i]);
        } else {
            
            while (!stack.isEmpty() && arr[i] <= stack.peek()) {
                stack.pop();
            }
            
            if (stack.isEmpty()) {
                output.push(-1);
            } else {
                output.push(stack.peek());
            }
            
            stack.push(arr[i]);
        }
    }
    
    return output;
}
console.log(leftSmaller([1,5, 0, 3, 4, 5], 6));
