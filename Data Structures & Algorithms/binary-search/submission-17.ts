class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] <= target) {
                left++;
            } else if (nums[mid] >= target) {
                right--;
            }
        }

        return -1;
    }
}
