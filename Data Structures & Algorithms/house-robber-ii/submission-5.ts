class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    cache: Map<number, number>;
    constructor() {
        this.cache = new Map<number, number>();
    }
    rob(nums: number[]): number {
        if (nums.length === 1) return nums[0];
        let firstPart = nums.slice(0, -1)
        let secondPart = nums.slice(1);
        this.cache.clear();
        let firstMax = this.dfs(0, firstPart);
        this.cache.clear();
        let secondMax = this.dfs(0, secondPart);
        let trueMax = Math.max(firstMax, secondMax);
        return trueMax;
    }

    dfs(i: number, arr: number[]): number {
        if (i >= arr.length) return 0;
        if (this.cache.has(i)) {
            return this.cache.get(i);
        }

        let robbed = arr[i] + this.dfs(i + 2, arr);
        let skipped = this.dfs(i + 1, arr);
        let max = Math.max(robbed, skipped);
        this.cache.set(i, max);
        return max;
    }
}
