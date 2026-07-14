class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let left = 0;
        let freqDict = {};
        let maxCount = 0;
        let longest = 0;

        for (let right = 0; right < s.length; right++) {
            freqDict[s[right]] = (freqDict[s[right]] || 0) + 1;
            maxCount = Math.max(maxCount, freqDict[s[right]]);

            let windowSize = right - left + 1;
            let charsToReplace = windowSize - maxCount;
            if (charsToReplace > k) {
                freqDict[s[left]]--;
                left++;
            }

            let newWindowSize = right - left + 1;
            longest = Math.max(newWindowSize, longest);
        }
        return longest;
    }
}
