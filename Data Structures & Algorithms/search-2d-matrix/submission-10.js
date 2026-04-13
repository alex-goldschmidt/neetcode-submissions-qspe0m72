class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (matrix.length === 0) return false;
        let set = new Set();
        for (let arr of matrix) {
            for (let value of arr) {
                set.add(value);
            }
        }
        if (set.has(target)) return true;
        return false;
    }
}
