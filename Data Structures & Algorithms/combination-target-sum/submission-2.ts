class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        let res: number[][] = [];
        let subset: number[] = [];
        this.dfs(res, nums, subset, 0, target, 0);
        return res;
    }

    dfs(res: number[][], nums: number[], subset: number[], i: number, target: number, sum: number) {
        if (sum > target || i >= nums.length) return;
        if (sum === target) {
            res.push([...subset]);
            return;
        }
        subset.push(nums[i]);
        this.dfs(res, nums, subset, i, target, sum + nums[i]);
        subset.pop();
        this.dfs(res, nums, subset, i + 1, target, sum);
    }
}
