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

function countRev(s){
    let count=0;
    const stack = new Stack ()
    if(s.length %2 !==0) return -1
    for(let i = 0; i < s.length; i++){
        if(stack.isEmpty() && s[i] ==="}"){
            count++
            stack.push("{")
        }
        else if(stack.peek() == "{" && s[i] =="}"){
            stack.pop()
        }else{
            stack.push(s[i])
        }
    }
    return (stack.length()/2 + count)
}
countRev("}{{}}{{{")