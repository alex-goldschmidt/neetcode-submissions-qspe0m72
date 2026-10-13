class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n: number): string[] {
        const res: string[] = [];
        let openCount = 0;
        let closedCount = 0;
        let subset = "";
        this.dfs(res, subset, openCount, closedCount, n);
        return res;
    }

    dfs(res: string[], subset: string, openCount: number, closedCount: number, n: number) {
        if (subset.length === 2 * n) {
            res.push(subset);
            return;
        }

        if (openCount < n) {
            this.dfs(res, subset + "(", openCount + 1, closedCount, n);
        }

        if (closedCount < openCount) {
            this.dfs(res, subset + ")", openCount, closedCount + 1, n);
        }
    }
}
