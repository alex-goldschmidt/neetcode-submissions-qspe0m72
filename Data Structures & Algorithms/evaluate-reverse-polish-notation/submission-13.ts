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
            let first = stack.pop();
            let second = stack.pop();
            if (token === "*") {
                res = first * second;
            } else if (token === "+") {
                res = first + second;
            } else if (token === "-") {
                res = second - first;
            } else if (token === "/") {
                res = Math.trunc(second/first);
            }
            stack.push(res);
        }
        return stack.pop();
    }
}
