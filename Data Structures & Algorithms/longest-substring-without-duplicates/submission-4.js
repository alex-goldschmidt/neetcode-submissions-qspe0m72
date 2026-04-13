class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0; 
        let right = 0;
        let set = new Set();
        let maxLength = 0;

        while (right < s.length) {
            let curr = s[right];
            if (!set.has(curr)) {
                set.add(curr);
                let windowSize = right - left + 1;
                maxLength = Math.max(windowSize, maxLength);
                right++;
            } else {
                set.delete(s[left]);
                left++;
            }
        }

        return maxLength;
    }
}
