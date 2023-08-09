//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

class Stack{
    constructor(){
        this.arr = [];
        this.top = -1;
    }
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        let mys = obj._push(arr, n);
        obj._getMinAtPop(mys);
        
    }
}
// } Driver Code Ends


//User function Template for javascript



class Stacks {
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
class Solution
{
    
    /**
     * @param {number} arr
     * @param {number} n
     * @returns {Stack}
    */
    //Function to push all the elements into the stack.
    _push(arr, n)
    {
        //your code here
    const stack = new Stacks()
       let min;
        for(let i = 0; i < n; i++){
           
            if(stack.isEmpty()||arr[i]<min){
                min = arr[i]
            }
            stack.push(min)
        }
        return stack
        
    }
    
    /**
     * @param {Stack} s
    */
    //Function to print minimum value in stack each time while popping.
    _getMinAtPop(s)
    {
        console.log(s)
        //your code here
        var result = ""
        while(!s.isEmpty()){
            
        var min = s.peek();
        s.pop()
        result = result + min + " "
        }
        return result
    }
    
}