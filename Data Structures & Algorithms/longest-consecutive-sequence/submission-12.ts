class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let longest = 0;
        let numsSet = new Set(nums);
        for (let num of numsSet) {
            if (numsSet.has(num - 1)) continue;
            let count = 1;
            while (numsSet.has(num + 1)) {
                count++;
                num++;
            }
            longest = Math.max(count, longest);
        }
        return longest;
    }
}
