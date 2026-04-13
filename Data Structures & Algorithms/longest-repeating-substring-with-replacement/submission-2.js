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
        let charFreq = {};
        for (let right = 0; right < s.length; right++) {
            charFreq[s[right]] = (charFreq[s[right]] || 0) + 1;
            maxCount = Math.max(maxCount, charFreq[s[right]]);
            
            let windowSize = right - left + 1;
            let charsToReplace = windowSize - maxCount;
            if (charsToReplace > k) {
                charFreq[s[left]]--;
                left++;
            }

            let newWindowSize = right - left + 1;
            maxLength = Math.max(maxLength, newWindowSize);
        }
        return maxLength;
    }
}
