class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let opsSet = new Set(['*', '+', '-', '/']);
        let stack = [];
        let res: number;
        for (let token of tokens) {
            if (!opsSet.has(token)) {
                stack.push(Number(token));
                continue;
            }
            let numOne = stack.pop();
            let numTwo = stack.pop();
            if (token === "+") {
                res = numTwo + numOne;
            } else if (token === "-") {
                res = numTwo - numOne;
            } else if (token === "*") {
                res = numTwo * numOne;
            } else if (token === "/") {
                res = Math.trunc(numTwo/numOne)
            }
            stack.push(res);
        }
        let final = stack.pop();
        return final;
    }
}
