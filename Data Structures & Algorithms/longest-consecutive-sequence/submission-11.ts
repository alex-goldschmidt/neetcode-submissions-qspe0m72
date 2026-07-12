class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let numsSet = new Set(nums);
        let longest = 0;
        for (let num of numsSet) {
            if (numsSet.has(num - 1)) continue;
            let currentLength = 1;

            while (numsSet.has(num + 1)) {
                currentLength++;
                num++;
            }
            longest = Math.max(currentLength, longest);
        }
        return longest;
    }
}
