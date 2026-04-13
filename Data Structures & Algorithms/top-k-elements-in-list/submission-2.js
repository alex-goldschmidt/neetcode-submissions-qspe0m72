class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqDict = {};
        for (let i = 0; i < nums.length; i++) {
            freqDict[nums[i]] = (freqDict[nums[i]] || 0) + 1;
        };

        const topKeys = Object.entries(freqDict)
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(([key]) => key);

        return topKeys;
    }
}
