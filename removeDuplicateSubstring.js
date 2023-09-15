const str = "abcdedv"


var removeDuplicateLetters = function (s) {
  const x = s.split("")
  var stack = []
  for (let i = 0; i < s.length; i++) {
    if (stack.includes(s[i])) {
      continue
    }
    else if (!stack.length || s[i] > stack[stack.length - 1]) {
      stack.push(s[i])
    } else {
      while (stack.length && s[i] < stack[stack.length - 1] && x.includes(stack[stack.length - 1], i + 1)) {
        stack.pop()
      }
      stack.push(s[i])

    }
  }
  return stack.join("")
};
console.log(removeDuplicateLetters("cbacdcbc"))