class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set();
        for (let i = 0; i <= nums.length; i++) {
            let curr = nums[i];
            if (set.has(curr)) {
                return true;
            }
            set.add(curr);
        }
        return false;
    }
}
