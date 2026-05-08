class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numsSet = new Set(nums);
        let longest = 0;
        for (let num of numsSet) {
            if (numsSet.has(num - 1)) continue;
            let currentStreak = 1;

            while (numsSet.has(num + 1)) {
                currentStreak++;
                num++;
            }
            longest = Math.max(longest, currentStreak)
        }

        return longest;
    }
}
