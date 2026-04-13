class Solution {
    constructor() {
        this.palindromeCount = 0;

    }
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let set = new Set(s);
        if (set.size === s.length) return s.length;
        if (set.size === 1) {
            return this
            .calculateDuplicateCharPalindromeCount(s.length)
        }

        for (let center = 0; center < s.length; center++) {
            this.expandFromCenter(s, center, center); 
            this.expandFromCenter(s, center, center + 1); 
        }

        return this.palindromeCount;
    }

    expandFromCenter(s, left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
            this.palindromeCount++;
        }
    }

    calculateDuplicateCharPalindromeCount(n) {
        return n * (n + 1) / 2;
    }
}
