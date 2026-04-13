class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        if (amount === 0) return 0;
        if (!coins || coins.length === 0) return -1;

        let dp = new Array(amount + 1).fill(Infinity);
        dp[0] = 0;

        for (let target = 1; target <= amount; target++) {
            for (let coin of coins) {
                let prev = target - coin;
                if (prev < 0) continue;

                let prevBest = dp[prev];
                if (dp[prev] === Infinity) continue;

                dp[target] = Math.min(dp[target], prevBest + 1);
            }
        }
        const ans = dp[amount] === Infinity ? - 1 : dp[amount];
        return ans;
    }
}
