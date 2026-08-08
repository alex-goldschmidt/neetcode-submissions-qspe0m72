class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let set = new Set(['+', '-', '/', '*']);
        let stack = [];
        for (let token of tokens) {
            if (!set.has(token)) {
                stack.push(Number(token));
                continue;
            }
            let res: number;
            let numOne = stack.pop();
            let numTwo = stack.pop();
            if (token === "+") {
                res = numTwo + numOne;
            } else if (token === "-") {
                res = numTwo - numOne;
            } else if (token === '*') {
                res = numTwo * numOne;
            } else if (token === '/') {
                let ans = numTwo / numOne;
                res = Math.trunc(ans);
            }
            stack.push(res);
        }
        let finalAnswer = stack.pop();
        return finalAnswer;
    }
}
