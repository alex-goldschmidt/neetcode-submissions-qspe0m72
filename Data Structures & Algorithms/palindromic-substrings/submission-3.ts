class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    total: number;
    constructor() {
        this.total = 0;
    }
    countSubstrings(s: string): number {
        if (new Set(s).size === s.length) return s.length;

        for (let i = 0; i < s.length; i++) {
            this.expandFromCenter(s, i, i);
            this.expandFromCenter(s, i, i + 1);
        }
        return this.total;
    }

    expandFromCenter(s: string, left: number, right: number) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
            this.total++;
        }
    }
}
