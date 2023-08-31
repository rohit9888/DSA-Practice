//leetcode hard 32

var longestValidParentheses = function(s) {
    let characterStack=[[")", -1]];
    let maxLength=0;
    for(let i=0;i<s.length;i++){
        if(s[i]=='('){
            characterStack.push([s[i], i]);
        }else{
            if(characterStack[characterStack.length-1][0]=='('){
                characterStack.pop();
                console.log({characterStack})
                if(maxLength<i-characterStack[characterStack.length-1][1]){
                    maxLength=i-characterStack[characterStack.length-1][1];
                }
            }else{
                characterStack.push([s[i], i]);
            }
        }
    }
   return  maxLength; 
}
var longestValidParenthesess = function(s) {
    let indexStack=[-1]
    let characterStack=[];
    let maxLength=0;
    for(let i=0;i<s.length;i++){
        if(s[i]=='('){
            indexStack.push(i);
            characterStack.push(s[i]);
        }else{
            if(characterStack[characterStack.length-1]=='('){
                indexStack.pop();
                characterStack.pop();
                console.log(indexStack, characterStack)
                if(maxLength<i-indexStack[indexStack.length-1]){
                    maxLength=i-indexStack[indexStack.length-1];
                }
            }else{
                indexStack.push(i);
            }
        }
    }
    console.log( maxLength); }
longestValidParentheses( "()()())")