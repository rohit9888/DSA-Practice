
class Stack{
    constructor(){
    this.arr = []
    }
    push(element){
    return this.arr.push(element)
    }
    pop()
    {
      return this.arr.pop()
    }
    peek(){
     return this.arr[this.arr.length -1]
    }
    isEmpty(){
     return this.arr.length ===0
    }
    print(){
     return console.log(this.arr)
    }
    length(){
        return this.arr.length
    }
}

function stringManipulation(arr){
    const stack = new Stack()
    for (let i=0; i<arr.length; i++){
        if(stack.isEmpty() || arr[i]!==stack.peek()){
            stack.push(arr[i])
        }else{
            stack.pop()
        }
    }
    console.log(stack.length())
}
stringManipulation(["bb", "aa","cc", "aa", "bb"])