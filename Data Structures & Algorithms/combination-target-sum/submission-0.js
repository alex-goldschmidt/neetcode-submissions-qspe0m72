class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        nums.sort((a, b) => a - b);
        const res = [];
        this.dfs(nums, target, 0, [], 0, res);
        return res;
    }

    dfs(nums, target, startIndex, currentCombo, currentTotal, result) {
        if (currentTotal === target) {
            result.push([...currentCombo]);
            return;
        }

        for (let i = startIndex; i < nums.length; i++) {
            const currentNum = nums[i];
            if (currentTotal + currentNum > target) break;

            currentCombo.push(currentNum);
            this.dfs(
                nums,
                target,
                i,
                currentCombo,
                currentTotal + currentNum,
                result
            );
            currentCombo.pop();
        }
    }
}
