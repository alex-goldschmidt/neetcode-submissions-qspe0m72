class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let n = nums.length;
        let arr = new Array(n).fill(1);

        let prefix = 1;
        for (let i = 0; i < n; i++) {
            arr[i] *= prefix;
            prefix *= nums[i];
        }

        let suffix = 1;
        for (let i = n - 1; i >= 0; i--) {
            arr[i] *= suffix;
            suffix *= nums[i];
        }

        return arr;
    }
}
