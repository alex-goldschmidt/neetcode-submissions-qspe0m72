class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        const res: number[][] = [];
        const subset: number[] = [];
        this.dfs(res, nums, subset, 0);
        return res;
    }

    dfs(res: number[][], nums: number[], subset: number[], index: number) {
        res.push([...subset]);
        if (index >= nums.length) {
            return;
        }
        for (let i = index; i < nums.length; i++) {
            if (i > index && nums[i] === nums[i - 1]) {
                continue;
            }
            subset.push(nums[i]);
            this.dfs(res, nums, subset, i + 1);
            subset.pop();
        }
    }
}
