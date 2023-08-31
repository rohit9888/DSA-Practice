var buildArray = function(target, n) {
    var stack = []
    var count = 0
    var minimum = Math.min(target[target.length-1], n)
    for(let i= 1; i<=minimum; i++){
        console.log(i, target[count])
        if(i == target[count]){
            stack.push("push")
            count++
        }else{
            stack.push("push")
            stack.push("pop")
        }
    }
    console.log(stack)
};
buildArray([1,2,3],3)