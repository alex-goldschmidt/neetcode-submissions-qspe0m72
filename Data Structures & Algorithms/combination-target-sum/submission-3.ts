class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const res: number[][] = [];
        let subset = [];
        this.dfs(res, subset, nums, target, 0, 0);
        return res;
    }

    dfs(res: number[][], subset: number[], nums: number[], target: number, i: number, sum: number) {
        if (sum > target || i >= nums.length) {
            return;
        }
        if (sum === target) {
            res.push([...subset]);
            return;
        }
        subset.push(nums[i]);
        this.dfs(res, subset, nums, target, i, sum + nums[i]);
        subset.pop();
        this.dfs(res, subset, nums, target, i + 1, sum);
    }
}
