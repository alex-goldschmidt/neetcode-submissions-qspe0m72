class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const res: number[][] = [];
        const subset: number[] = [];
        this.dfs(res, nums, subset, 0);
        return res;
    }

    dfs(res: number[][], nums: number[], subset: number[], i: number) {
        if (i >= nums.length) {
            res.push([...subset]);
            return;
        }
        subset.push(nums[i]);
        this.dfs(res, nums, subset, i + 1);
        subset.pop();
        this.dfs(res, nums, subset, i + 1);
    }
}
