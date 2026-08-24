class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let currentSum = nums[left] + nums[right];
            if (currentSum === target) {
                return [left + 1, right + 1];
            } else if (currentSum <= target) {
                left++;
            } else {
                right--;
            }
        }
    }
}
