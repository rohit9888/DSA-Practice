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
    empty() {
        return this.arr.length === 0
    }
    print() {
        return console.log(this.arr)
    }
}
function reverseString(string){
    const s = new Stack()
    var result = ""
    const stringLength = string.length
    for(let i = 0; i < stringLength; i++) {
    s.push(string[i])
    }
    while(!s.empty()) {
        const poppedElement = s.pop()
        result+=poppedElement
        
    }
    console.log({result})
}
reverseString("string")
