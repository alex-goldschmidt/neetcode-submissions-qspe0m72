class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let set = new Set();
        let left = 0;
        let right = 0;
        let longest = 0;
        while (right < s.length) {
            if (!set.has(s[right])) {
                set.add(s[right]);
                let windowSize = right - left + 1;
                longest = Math.max(windowSize, longest);
                right++;
            } else {
                set.delete(s[left]);
                left++;
            }
        }
        return longest;
    }
}
