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
        let firstMax = this.safeCalculate(nums.slice(0, -1));
        let secondMax = this.safeCalculate(nums.slice(1));
        let trueMax = Math.max(firstMax, secondMax);
        return trueMax;
    }

    dfs(i: number, arr: number[]): number {
        if (i >= arr.length) return 0;
        if (this.cache.has(i)) {
            return this.cache.get(i);
        }

        let robbedHouses = arr[i] + this.dfs(i + 2, arr);
        let skipped = this.dfs(i + 1, arr);
        let max = Math.max(robbedHouses, skipped);
        this.cache.set(i, max);
        return max;
    }

    safeCalculate(arr: number[]) {
        this.cache.clear()
        let val = this.dfs(0, arr);
        return val;
    }
}
