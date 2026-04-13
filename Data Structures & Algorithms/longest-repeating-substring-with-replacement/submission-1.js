class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let maxCount = 0;
        let maxLength = 0;
        let charFrequency = {};

        for (let right = 0; right < s.length; right++) {
            let curr = s[right];
            charFrequency[curr] = (charFrequency[curr] || 0) + 1;
            maxCount = Math.max(maxCount, charFrequency[curr]);

            let windowSize = right - left + 1;
            let charsToReplace = windowSize - maxCount;

            if (charsToReplace > k) {
                charFrequency[s[left]]--;
                left++;
            }

            let newWindowSize = right - left + 1;
            maxLength = Math.max(newWindowSize, maxLength);
        }

        return maxLength;
    }
}
