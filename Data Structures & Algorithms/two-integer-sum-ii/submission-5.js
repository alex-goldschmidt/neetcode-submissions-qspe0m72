class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let nums = numbers;
        let left = 0;
        let right = nums.length - 1;
        while (left < right) {
            let currentSum = nums[left] + nums[right];
            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                return [left + 1, right + 1]
            }
        }
    }
}
