class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        let res: number[][] = [];
        let subset: number[] = [];
        this.dfs(0, nums, res, subset);
        return res;
    }

    dfs(i: number, nums: number[], res: number[][], subset: number[]) {
        if (i === nums.length) {
            res.push([...subset]);
            return;
        }
        subset.push(nums[i]);
        this.dfs(i + 1, nums, res, subset);
        subset.pop();
        this.dfs(i + 1, nums, res, subset);
    }
}
