class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let closeToOpenMap = {
            ")" : "(",
            "]" : "[",
            "}" : "{",
        }
        for (let char of s) {
            if (closeToOpenMap[char]) {
                if (stack.length > 0 && stack[stack.length - 1] === closeToOpenMap[char]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(char);
            }

        }
        return stack.length === 0;
    }
}
