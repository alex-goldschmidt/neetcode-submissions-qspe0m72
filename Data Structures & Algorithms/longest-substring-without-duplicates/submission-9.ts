class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let left = 0;
        let right = 0;
        let set = new Set();
        let longest = 0;
        let currentCount = 0;
        while (right < s.length) {
            if (!set.has(s[right])) {
                set.add(s[right]);
                right++;
                currentCount++;
                longest = Math.max(longest, currentCount);
            } else {
                set.delete(s[left]);
                left++;
                currentCount--;
            }
        }
        return longest;
    }
}
