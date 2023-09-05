
var simplifyPath = function (path) {
    // Split path by matching /./ or /
	let newarr = path.split("/./");
    let pathArr = path.split("/")
   let stack = [];
   for (let i = 0; i < pathArr.length; i++) {
       if (pathArr[i]) {
          
          if (pathArr[i] === '..') stack.pop();
         else if (pathArr[i] !== '.') stack.push(pathArr[i]);
		}
	}
	return '/' + stack.join('/');
};
console.log(simplifyPath("/a/../../b/../c//.//"))