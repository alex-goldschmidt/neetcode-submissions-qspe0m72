class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * 1. set longest = 0 and get rid of dupes to not count them
     *     i.e, make a hashset
     * 2. iterate over nums hashSet
     * 3. start currentStreak if the set does not have
     *      current value - 1
     * 4. while the hashSet has currentNum + 1
     *      increment currentNum
     *      increment currentStreak
     * 5. set longest = max between longest and currentStreak
     * 6. return longest;
     */
    longestConsecutive(nums) {
        let longest = 0;
        let numsSet = new Set(nums);
        for (let num of numsSet) {
            if (!numsSet.has(num - 1)) {
                let currentNum = num;
                let currentStreak = 1;

                while (numsSet.has(currentNum + 1)) {
                    currentNum += 1;
                    currentStreak += 1;
                }

                longest = Math.max(longest, currentStreak);
            }
        }
        return longest;
    }
}
