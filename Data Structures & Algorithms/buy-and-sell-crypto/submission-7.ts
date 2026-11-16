class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        let minPrice = prices[0];
        for (let price of prices) {
            if (price < minPrice) minPrice = price
            else maxProfit = Math.max(maxProfit, price - minPrice);
        }
        return maxProfit;
    }
}
