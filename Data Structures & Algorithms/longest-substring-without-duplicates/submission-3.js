class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0; 
        let right = 0;
        let set = new Set();
        let longest = 0;
        while (right < s.length) {
            if (!set.has(s[right])) {
                set.add(s[right]);
                let windowSize = right - left + 1;
                longest = Math.max(longest, windowSize);
                right++;
            } else {
                set.delete(s[left]);
                left++;
            }
        }
        return longest;
    }
}
