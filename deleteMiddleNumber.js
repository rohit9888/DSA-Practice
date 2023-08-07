
class Solution 
{
    deleteMid(s, sizeOfStack)
    {
        const otherStack = new Stack()
        if (sizeOfStack == 0) {
            return 0;
          }
          let loopNumber = sizeOfStack / 2;
          var x = Math.floor(loopNumber)
          for (let i = 0; i < x; i++) {
            otherStack.push(s.top())
              s.pop();
          }
          s.pop()
          while(!otherStack.empty()){

              console.log(otherStack.top())
              s.push(otherStack.top())
              otherStack.pop()
            }
            console.log(s)
            return s;
          }
        }

class Stack
{
    constructor(){
        this.a = new Array();
    }
    top(x){
        return this.a[this.a.length-1];
    }
    push(x){
        this.a.push(x);
    }
    pop(){
        if(this.a.length!=0)
            this.a.pop();
    }
    empty(){
        return this.a.length==0;
    }
}
main()
function readLine() {
    return inputString[currentLine++];
}

function main() {
        const input_line = [1,2,3,4,5,6,7,8,9,10,11]
        const sizeOfStack = 11
        let myStack = new Stack();
        for(let i=0;i<sizeOfStack;i++){
            myStack.push(BigInt(input_line[i]));
        }
        let obj = new Solution();
        let ans = obj.deleteMid(myStack, sizeOfStack);
        // console.log({ans});
    
}

