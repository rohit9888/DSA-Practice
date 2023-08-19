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

function  Reduced_String(k,s){ 
  //code here
  const stack = new Stack()
    for(let i=s.length-1;i>=0;i--){
      if(stack.length() === 0 || stack.peek()[0] !== s[i]){
        stack.push([s[i],1])
      }
      else if(stack.peek()[0] == s[i]){
        var newNumber = stack.peek()[1] + 1
        stack.pop()
        stack.push([s[i],newNumber])
      }
      if(stack.peek()[1] === k){
        stack.pop()
      }
    }
    var result =""
    while(!stack.isEmpty()){
      var newString =( stack.peek()[0]).repeat(stack.peek()[1])
      result +=newString
      stack.pop()
    }
    console.log(result)
}
Reduced_String(3, "geegsforgeeeks")
