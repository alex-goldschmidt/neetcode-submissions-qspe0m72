class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (nums.length === 0) return false;
        let map = {};
        for (let i = 0; i < nums.length; i++) {
            let value = nums[i];
            if (value in map) return true;
            map[nums[i]] = i;
        }
        return false;
    }
}
