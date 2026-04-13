class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let minPrice = prices[0];
        for (let i = 0; i < prices.length; i++) {
            let curr = prices[i];
            if (curr < minPrice) minPrice = curr;
            else maxProfit = Math.max(maxProfit, curr - minPrice);
        }
        return maxProfit;
    }
}
