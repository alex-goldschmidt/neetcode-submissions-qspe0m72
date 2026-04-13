class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (matrix.length === 0) return false;
        let cols = matrix.length;
        let rows = matrix[0].length;
        return this.contains(matrix, rows, cols, target);
    }

    contains(matrix, rows, cols, target) {
        let left = 0;
        let right = rows * cols - 1;
        while (left <= right) {
            let mid = Math.floor((right + left) / 2);
            let rowIndex = Math.floor(mid / rows);
            let colIndex = Math.floor(mid % rows);
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
    };
}
