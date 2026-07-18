class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let count = {};
        let freq = Array.from({ length: nums.length + 1}, () => []);

        for (let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        for (let key in count) {
            let val = count[key];
            freq[val].push(parseInt(key));
        }

        const res = [];
        for (let i = freq.length - 1; i >= 0; i--) {
            let entry = freq[i];
            for (let val of entry) {
                res.push(val);
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}
