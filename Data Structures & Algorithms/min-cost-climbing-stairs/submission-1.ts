class Solution {
    cache: Map<number, number>;
    /**
     * @param {number[]} cost
     * @return {number}
     */
    constructor() {
        this.cache = new Map<number, number>();
    }
    minCostClimbingStairs(cost: number[]): number {
        let val = Math.min(this.dfs(0, cost), this.dfs(1, cost));
        return val;
    }

    dfs(i: number, cost: number[]): number {
        if (i >= cost.length) return 0;
        if (this.cache.has(i)) {
            return this.cache.get(i);
        }

        let firstVal = this.dfs(i + 1, cost);
        let secondVal = this.dfs(i + 2, cost);
        let minPrice = cost[i] + Math.min(firstVal, secondVal);

        this.cache.set(i, minPrice);
        return minPrice;
    }
}
