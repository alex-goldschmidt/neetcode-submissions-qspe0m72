class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        if (nums.length === 0) return 0;
        let currentMax = nums[0];
        let currentMin = nums[0];
        let bestSoFar = nums[0];

        for (let i = 1; i < nums.length; i++) {
            let curr = nums[i];

            let candidate1 = curr;
            let candidate2 = curr * currentMax;
            let candidate3 = curr * currentMin;

            let nextMax = Math.max(candidate1, candidate2, candidate3);
            let nextMin = Math.min(candidate1, candidate2, candidate3);

            currentMax = nextMax;
            currentMin = nextMin;

            bestSoFar = Math.max(currentMax, bestSoFar);
        }

        return bestSoFar;

    }
}
