class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closeToOpen = {
            ')': '(',
            ']': '[',
            '}': '{'
        };
        for (let c of s) {
            const matchingOpenBracket = closeToOpen[c];
            let lastItem = stack[stack.length - 1];

            if (!matchingOpenBracket) {
                stack.push(c);
                continue;
            }
            
            if (stack.length <= 0 || lastItem !== matchingOpenBracket) {
                return false;
            }
            
            stack.pop();
        }
        
        return stack.length === 0;
    }
}
