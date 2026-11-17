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
        this.cache.clear();
        let val = this.dfs(0, n);
        return val;
    }

    dfs(current: number, n: number): number {
        if (current === n) return 1;
        if (current > n) return 0;

        if (this.cache.get(current)) {
            return this.cache.get(current);
        }

        const waysToFinish = this.dfs(current + 1, n) + this.dfs(current + 2, n);

        this.cache.set(current, waysToFinish);
        return waysToFinish;
    }
}
