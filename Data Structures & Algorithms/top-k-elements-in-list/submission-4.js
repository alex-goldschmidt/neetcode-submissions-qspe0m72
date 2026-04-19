class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};
        let freq = Array.from({ length: nums.length + 1 }, () => []);
        for (let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        for (let n in count) {
            let entry = count[n];
            freq[entry].push(parseInt(n));
        }

        const res = [];
        for (let i = freq.length - 1; i >= 0; i--) {
            let bucket = freq[i];
            for (let n of bucket) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}
