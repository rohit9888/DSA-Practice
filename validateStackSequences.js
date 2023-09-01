var validateStackSequences = function(pushed, popped) {
  var count = 0
    var stack = []
    for(let i=0; i<pushed.length;i++){
    if(pushed[i] ===popped[count]){
        count++
        while(stack[stack.length-1]===popped[count] && stack.length){
            stack.pop()
            count++
        }
    }else {
        stack.push(pushed[i])
    }
  }
};
validateStackSequences([1,2,3,4,5], [4,3,5,1,2])