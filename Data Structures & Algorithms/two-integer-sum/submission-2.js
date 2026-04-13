class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};
        for (let i = 0; i < nums.length; i++) {
            let curr = nums[i];
            let diff = target - curr;
            if (diff in map) {
                return [map[diff], i];
            }
            map[curr] = i;
        }
    }
}
