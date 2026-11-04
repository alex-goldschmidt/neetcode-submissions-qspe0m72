class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const operators = new Set(["*", "/", "+", "-"]);
        let res: number;
        let stack: number[] = [];
        for (let token of tokens) {
            if (!operators.has(token)) {
                stack.push(Number(token));
                continue;
            }
            let right = stack.pop();
            let left = stack.pop();
            if (token === "*") {
                res = left * right;
            } else if (token === "+") {
                res = left + right;
            } else if (token === "-") {
                res = left - right;
            } else if (token === "/") {
                res = Math.trunc(left/right);
            }
            stack.push(res);
        }
        return stack.pop();
    }
}
