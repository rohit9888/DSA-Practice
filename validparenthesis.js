var isValid = function(s) {
    const dict = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    let stack = []; 
    for (let c of s) { 
        if (c === '(' || c === '{' || c === '[') { 
            stack.push(c);
        } else { 
            if (!stack.length || stack[stack.length - 1] !== dict[c])  {
                return false; 
            }
            stack.pop(); 
        }
    }
    return !stack.length
};
console.log(isValid("]"))