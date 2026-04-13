class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length;
        let n = m > 0 ? matrix[0].length : 0;
        if (m === 0 || n === 0) return false;
        return this.binarySearchMatrix(matrix, m, n, target);
    }

    binarySearchMatrix(matrix, m, n, target) {
        let left = 0;
        let right = m * n - 1;
        
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            let row = Math.floor(mid / n);
            let col = mid % n;
            let val = matrix[row][col];
            if (val === target) {
                return true;
            } else if (val < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return false;
    }
}
