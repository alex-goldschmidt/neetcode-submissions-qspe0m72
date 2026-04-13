class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     * set minPrices = prices[i] and maxProfit = 0;
     */
    maxProfit(prices) {
        let minPrice = prices[0];
        let maxProfit = 0;
        for (let i = 0; i < prices.length; i++) {
            let curr = prices[i];
            if (curr < minPrice) minPrice = curr;
            else maxProfit = Math.max(maxProfit, curr - minPrice)
        }
        return maxProfit;
    }
}
