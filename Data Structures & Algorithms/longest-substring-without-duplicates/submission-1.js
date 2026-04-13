class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;
        let set = new Set();
        let left = 0;
        let right = 0;

        while (right < s.length) {
            let curr = s[right];

            if (!set.has(curr)) {
                set.add(curr);
                let windowSize = right - left + 1;
                longest = Math.max(longest, windowSize);
                right++;
            } else {
                // Remove characters from the left until the duplicate is gone
                set.delete(s[left]);
                left++;
            }
        }

        return longest;
    }
}
