class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     * 1. needs a map to keep track of nums and their occurences
     * 2. push each num into map, while incrementing count as necessary for each
     * 3. return values in map order by desc limit k
     */
    topKFrequent(nums, k) {
        let map = {};
        for (let num of nums){
            map[num] = (map[num] || 0) + 1;
        }

        return Object.entries(map)
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(([num]) => Number(num));
    }
}
