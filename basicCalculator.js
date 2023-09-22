var calculate = function (m) {
    let stack = []
    let number = ""
    let operation = "+"
    const s = m.split(" ").join("")
    for (let i = 0; i < s.length; i++) {

        if (s[i] >= 0 && s[i] <= 9) {
            number += s[i]
        }
        if (s[i] ==="/" || s[i] ==="*" ||s[i] ==="+" ||s[i] ==="-" || i === s.length - 1) {
             if (operation === "*") {
                stack.push(parseInt(number) * parseInt(stack.pop()))
            }
            else if (operation === "/") {
                stack.push(Math.trunc(parseInt(stack.pop())/ parseInt(number)))
            }
            else if (operation === "-") {
                stack.push(parseInt(-number))
            }
            else if (operation === "+") {
                stack.push(parseInt(number))
            }
            operation = s[i]
            number = ""
        }
    }
    var output = 0
    while(stack.length){
        output +=stack.pop()
    }
    return output
}


