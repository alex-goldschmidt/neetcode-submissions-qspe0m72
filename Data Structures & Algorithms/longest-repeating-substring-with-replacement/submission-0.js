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
        let charCount = {}; 
        
        for (let right = 0; right < s.length; right++) {
            let rightChar = s[right];
            charCount[rightChar] = (charCount[rightChar] || 0) + 1;
            
            maxCount = Math.max(maxCount, charCount[rightChar]);
            
            let windowSize = right - left + 1;
            let charsToReplace = windowSize - maxCount;
            
            if (charsToReplace > k) {
                let leftChar = s[left];
                charCount[leftChar]--;
                left++;
            }
            
            maxLength = Math.max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
}