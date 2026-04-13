class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const n = s.length;
        const dp = new Array(n + 1).fill(false);
        dp[n] = true;

        for (let i = n - 1; i >= 0; i--) {
            for (const word of wordDict) {
                const end = i + word.length;
                if (end <= n && s.slice(i, end) === word && dp[end] === true) {
                    dp[i] = true;
                    break;
                }
            }
        }

        return dp[0];
    }
}
