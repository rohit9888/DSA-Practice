
//Brute Force
function findLargestElement(arr) {
    n = 6
    arrOutput = []
    for (let i = 0; i < n; i++) { //i =0
        let largestElement = false
        for (let j = i + 1; j < n; j++) {
            if (arr[j] > arr[i]) {
                arrOutput.push(arr[j])
                largestElement = true
                break
            }
        }
        if (!largestElement) {
            arrOutput.push(-1)
        }
    }
    return arrOutput
}
console.log(findLargestElement([1, 23, 5, 7, 8, 2]))

// Using Stack And Algorithms
class Stack {
    constructor() {
        this.arr = []
    }
    push(...element) {
        return this.arr.push(...element)
    }
    pop() {
        return this.arr.pop()
    }
    peek() {
        return this.arr[this.arr.length - 1]
    }
    isEmpty() {
        return this.arr.length === 0
    }
    print() {
        return console.log(this.arr)
    }
}
const stack = new Stack()
function findLargestElement(arr) {
    output = []
    for (let i = arr.length - 1; i > -1; i--) {
        if (stack.isEmpty()) {
            output.push(-1)
            stack.push(arr[i])
        } else if (arr[i] < stack.peek()) {
            output.push(stack.peek())
            stack.push(arr[i])
        } else if (arr[i] >= stack.peek()) {
            while (!stack.isEmpty() && arr[i] >= stack.peek()) {
                stack.pop()
            }
            if (stack.isEmpty()) {
                output.push(-1)
            } else {
                output.push(stack.peek())
            }
            stack.push(arr[i])
        }
    }
    return output
}
result = findLargestElement([1, 23, 5, 7, 8, 2])
console.log(result.reverse())