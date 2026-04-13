class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let map = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        };
        for (let char of s) {
            if (!map[char]) {
                stack.push(char);
                continue;
            }

            let last = stack.pop();
            if (last !== map[char]) {
                return false;
            }
        }
        return stack.length === 0;
    }
}
