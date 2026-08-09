class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let set = new Set();
        for (let i = 0; i < nums.length; i++) {
            let curr = nums[i];
            if (set.has(curr)) {
                return curr;
            }
            set.add(curr);
        }
    }
}
