class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(nums: number[], target: number): number[][] {
        nums.sort((a, b) => a - b);
        const res: number[][] = [];
        const subset: number[] = [];
        this.dfs(res, subset, nums, target, 0, 0);
        return res;
    }

    dfs(res: number[][], subset: number[], nums: number[], target: number, index: number, sum: number) {
        if (sum === target) {
            res.push([...subset]);
            return;
        }
        if (sum > target || index >= nums.length) {
            return;
        }
        for (let i = index; i < nums.length; i++) {
            if (i > index && nums[i] === nums[i - 1]) {
                continue;
            }
            subset.push(nums[i]);
            this.dfs(res, subset, nums, target, i + 1, sum + nums[i]);
            subset.pop()
        }
    }
}
