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
            let curr = nums[left] + nums[right];
            if (curr < target) {
                left++;
            } else if (curr > target) {
                right--;
            } else {
                return [left + 1, right + 1]
            }
        }
    }
}
