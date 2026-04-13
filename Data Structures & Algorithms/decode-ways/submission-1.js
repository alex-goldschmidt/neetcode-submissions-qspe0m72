class Solution {
    constructor() {
        this.map = {};
    }
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if (s.length === 0) return 1;
        if (s[0] === "0") return 0;
        if (this.map[s]) return this.map[s];

        let count = this.numDecodings(s.substring(1));

        if (s.length >= 2) {
            let twoDigit = parseInt(s.substring(0, 2));
            if (twoDigit <= 26) {
                count += this.numDecodings(s.substring(2));
            }
        }
        this.map[s] = count;
        return count;
    }
}
