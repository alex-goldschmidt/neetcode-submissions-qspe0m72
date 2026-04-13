class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let cols = matrix.length;
        let rows = matrix.length > 0 ? matrix[0].length : 0;
        if (rows === 0 || cols === 0) return false;
        return this.binarySearchMatrix(matrix, rows, cols, target);
    }

    binarySearchMatrix(matrix, rows, cols, target) {
        let left = 0;
        let right = rows * cols - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            let rowIndex = Math.floor(mid / rows);
            let colIndex = mid % rows;
            let val = matrix[rowIndex][colIndex];
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
