class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (let token of tokens) {
            if (token !== '+' && token !== '-' 
            && token !== '*' && token !== '/')  {
                stack.push(Number(token));
            } else {
                let right = stack.pop();
                let left = stack.pop();
                let res;
                if (token === '+') {
                    res = left + right;
                } else if (token === "-") {
                    res = left - right;
                } else if (token === "*") {
                    res = left * right;
                } else if (token === "/") {
                    let ans = left / right;
                    res = ans > 0 ? Math.floor(ans) : Math.ceil(ans);
                }
                stack.push(res);
            }
        }
        return stack.pop();
    }
}
