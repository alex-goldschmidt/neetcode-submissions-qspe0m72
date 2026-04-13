class Solution {
    constructor() {
        this.bestStart = 0;
        this.bestLength = 0;
    }

    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        for (let center = 0; center < s.length; center++) {
            const even = this.expandCenter(s, center, center);
            this.validateLength(even);

            const odd = this.expandCenter(s, center, center + 1);
            this.validateLength(odd);
        }
        return s.slice(this.bestStart, this.bestStart + this.bestLength);
    }

    expandCenter(s, left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }

        const start = left + 1;
        const length = right - left - 1;

        return { start, length };
    }

    validateLength(expandedCenter) {
        if (expandedCenter.length <= this.bestLength) {
            return;
        }

        this.bestStart = expandedCenter.start;
        this.bestLength = expandedCenter.length;
    }

}
