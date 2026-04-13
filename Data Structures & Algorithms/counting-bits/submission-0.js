class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let arr = new Array(n + 1).fill(0);
        for (let i = 1; i <= n; i++) {
            arr[i] = arr[i >> 1] + (i & 1);
        }
        return arr;
    }
}
