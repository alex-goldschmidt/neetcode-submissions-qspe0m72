class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        if (nums.length === 1) {
            return [[nums[0]]];
        }
        const res: number[][] = [];
        let subset: number[] = [];
        let usedIndexes: boolean[] = new Array(nums.length).fill(false);
        this.dfs(res, nums, subset, usedIndexes);
        return res;
    }

    dfs(res: number[][], nums: number[], subset: number[], usedIndexes: boolean[]) {
        if (subset.length === nums.length) {
            res.push([...subset]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (usedIndexes[i]) {
                continue;
            }
            usedIndexes[i] = true;
            subset.push(nums[i]);
            this.dfs(res, nums, subset, usedIndexes);
            subset.pop();
            usedIndexes[i] = false;
        }
    }
}
