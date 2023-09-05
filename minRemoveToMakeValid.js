var minRemoveToMakeValid = function (s) {
    let res = []
    let stack = []
	
    for(let i=0; i<s.length; i++){
        if(s[i] == '(') stack.push(res.length)
        else if(s[i] == ')'){
            if(stack.length) stack.pop()
            else continue
        }
        res.push(s[i])
    }
    
    while(stack.length){
        res[stack.pop()] = ''
    }

    return res.join('')}
minRemoveToMakeValid("))((")