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

    dfs(nums, target, index, currentCombo, currentTotal, res) {
        if (currentTotal === target) {
            res.push([...currentCombo]);
            return;
        }

        for (let i = index; i < nums.length; i++) {
            let newTotal = currentTotal + nums[i]
            if (newTotal > target) break;

            currentCombo.push(nums[i]);
            this.dfs(
                nums,
                target,
                i,
                currentCombo,
                newTotal,
                res
            );
            currentCombo.pop();
        }
    }
}
