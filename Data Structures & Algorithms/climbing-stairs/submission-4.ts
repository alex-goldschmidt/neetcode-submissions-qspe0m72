class Solution {
    cache: Map<number, number>;
    /**
     * @param {number} n
     * @return {number}
     */
    constructor() {
        this.cache = new Map<number, number>();
    }
    climbStairs(n: number): number {
        let val = this.dfs(0, n);
        return val;
    }

    dfs(curr: number, n: number): number {
        if (curr === n) return 1;
        if (curr > n) return 0;

        if (this.cache.get(curr)) {
            return this.cache.get(curr);
        }

        const waysToSolve = this.dfs(curr + 1, n) + this.dfs(curr + 2, n);
        this.cache.set(curr, waysToSolve);
        return waysToSolve;
    }
}
