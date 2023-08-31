["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"]

[["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]

   /**
 * @param {string} homepage
 */

 var BrowserHistory = function(homepage) {
    this.st = [homepage]
    this.otherStack = []
};

/** 
* @param {string} url
* @return {void}
*/
BrowserHistory.prototype.visit = function(url) {
this.st.push(url)
this.otherStack = []
};

/** 
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.back = function(steps) {
var minimum = Math.min(this.st.length, steps)
var count = 0
while(minimum!=count){
    var poppedElement = this.st.pop()
    this.otherStack.push(poppedElement)
    count++
}
this.st[this.st.length-1]
};

/** 
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.forward = function(steps) {
var minimum = Math.min(this.otherStack.length, steps)
var count = 0
while(minimum!=count){
    var poppedElement = this.otherStack.pop()
    this.st.push(poppedElement)
    count++
    return this.st[this.st.length-1]
}
};

const browserHistory = new BrowserHistory()
browserHistory.visit("asdfasf")