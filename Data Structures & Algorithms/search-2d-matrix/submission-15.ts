class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        if (matrix.length === 0) return false;
        let rowLength = matrix.length;
        let colLength = matrix[0].length;
        let left = 0;
        let right = rowLength * colLength - 1;

        while (left <= right) {
            let mid = Math.floor((right + left) / 2);
            let rowIndex = Math.floor(mid / colLength);
            let colIndex = Math.floor(mid % colLength);
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
