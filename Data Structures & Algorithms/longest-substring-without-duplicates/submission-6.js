class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let left = 0;
        let right = 0;
        let maxLength = 0;
        while (right < s.length) {
            if (!set.has(s[right])) {
                set.add(s[right]);
                let windowSize = right - left + 1;
                maxLength = Math.max(maxLength, windowSize);
                right++
            } else {
                set.delete(s[left]);
                left++;
            }
        }
        return maxLength;
    }
}
