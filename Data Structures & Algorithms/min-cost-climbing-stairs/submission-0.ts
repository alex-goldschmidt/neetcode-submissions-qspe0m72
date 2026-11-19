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

        let firstTraversal = this.dfs(i + 1, cost);
        let secondTraversal = this.dfs(i + 2, cost);

        let min = Math.min(firstTraversal, secondTraversal);
        let price = cost[i] + min;

        this.cache.set(i, price);
        return price;
    }
}
