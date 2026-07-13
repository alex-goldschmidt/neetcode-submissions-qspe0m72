class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        let minPrice = prices[0];
        for (let i = 0; i < prices.length; i++) {
            let currentPrice = prices[i];
            if (currentPrice < minPrice) minPrice = currentPrice;
            else maxProfit = Math.max(maxProfit, currentPrice - minPrice);
        }
        return maxProfit;
    }
}
