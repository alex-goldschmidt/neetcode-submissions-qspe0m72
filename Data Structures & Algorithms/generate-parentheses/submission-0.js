class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    backTrack(openCount, closedCount, maxPair, comboSoFar, stack) {
        if (openCount === closedCount && closedCount === maxPair) {
            stack.push(comboSoFar);
            return;
        }

        if (openCount < maxPair) { 
            this.backTrack(openCount + 1, closedCount, maxPair, comboSoFar + "(", stack)
        }

        if (closedCount < openCount) {
            this.backTrack(openCount, closedCount + 1, maxPair, comboSoFar + ")", stack)

        }
    }

    generateParenthesis(n) {
        const stack = [];
        this.backTrack(0, 0, n, '', stack);
        return stack;
    }
}
