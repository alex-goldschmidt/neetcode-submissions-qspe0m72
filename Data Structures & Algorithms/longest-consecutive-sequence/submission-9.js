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

            let currentCount = 1;
            while (numsSet.has(num + 1)) {
                num++;
                currentCount++;
            }

            longest = Math.max(currentCount, longest);
        }

        return longest;
    }
}
