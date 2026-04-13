class Solution {

    constructor() {
        this.bestStart = 0;
        this.bestLength = 1;
    }
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        if (s.length <= 1) return s;

        for (let center = 0; center < s.length; center++) {
            const odd = this.expandFromCenter(s, center, center);
            this.setBestStartAndLength(odd);

            const even = this.expandFromCenter(s, center, center + 1);
            this.setBestStartAndLength(even);
        }

        return s.slice(this.bestStart, this.bestStart + this.bestLength)

    }

    expandFromCenter(s, left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        const start = left + 1;
        const length = right - left - 1;

        return { start, length };
    }

    setBestStartAndLength(palindromeRange) {
        if (palindromeRange.length <= this.bestLength) {
            return;
        }
        
        this.bestStart = palindromeRange.start;
        this.bestLength = palindromeRange.length
        return;
    }
}
