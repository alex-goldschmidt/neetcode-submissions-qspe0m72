class Solution {
    cache: Map<number, number>;
    /**
     * @param {number[]} nums
     * @return {number}
     */
    constructor() {
        this.cache = new Map<number,number>();
    }
    rob(nums: number[]): number {
        if (!nums || nums.length === 0) return 0;
        let robbedHouses = this.dfs(0, nums);
        return robbedHouses;
    }

    dfs(i: number, nums: number[]): number {
        if (i >= nums.length) return 0;
        if (this.cache.has(i)) {
            return this.cache.get(i);
        }
        let robbedVal = nums[i] + this.dfs(i + 2, nums);
        let skippedVal = this.dfs(i + 1, nums);

        let max = Math.max(robbedVal, skippedVal);
        this.cache.set(i, max);
        return max;
    }
}
