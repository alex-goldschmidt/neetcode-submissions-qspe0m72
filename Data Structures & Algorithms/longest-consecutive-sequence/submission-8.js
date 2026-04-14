class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numsSet = new Set(nums);
        let longest = 0;
        for (let currentNum of numsSet) {
            if (numsSet.has(currentNum - 1)) continue;
            let currentLength = 1;
            while (numsSet.has(currentNum + 1)) {
                currentLength++;
                currentNum++;
            }
            longest = Math.max(currentLength, longest);
        }
        return longest;
    }
}
