class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if (nums.length === 0) return undefined;
        let map = {};
        for (let i = 0; i < nums.length; i++) {
            let current = nums[i];
            let diff = target - current;
            if (diff in map) {
                return [map[diff], i];
            }
            map[current] = i;
        }

    }
}
