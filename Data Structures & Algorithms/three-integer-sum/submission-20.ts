class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        let res = [];

        for (let i = 0; i <= nums.length; i++) {
            if (nums[i] === nums[i - 1]) continue;
            if (nums[i] > 0) break;

            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                let currentSum = nums[left] + nums[i] + nums[right];

                if (currentSum === 0) {
                    res.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;
                    while (left <= right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                    continue;
                } else if (currentSum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return res;
    }
}
