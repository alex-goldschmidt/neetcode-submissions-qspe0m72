class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};
        for (let i = 0; i < nums.length; i++) {
            let curr = nums[i];
            if (curr in map) {
                map[curr]++
            } else {
                map[curr] = 1;
            }
        }

        return Object.entries(map)
        .sort((a,b) => b[1] - a[1])//order by desc
        .slice(0, k) //gets entries based on value of k
        .map(entry => entry[0]); //gets the keys for the k entries
    }
}
