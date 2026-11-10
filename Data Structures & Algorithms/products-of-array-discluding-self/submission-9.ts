class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length;
        const ans = new Array(n).fill(1);

        let prefix = 1;
        for (let i = 0; i < nums.length; i++) {
            ans[i] = ans[i] * prefix;
            prefix = prefix * nums[i];
        }

        let suffix = 1;
        for (let i = n - 1; i >= 0; i--) {
            ans[i] = ans[i] * suffix;
            suffix = suffix * nums[i];
        }

        return ans;
    }
}
