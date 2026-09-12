class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let rowLength = matrix.length;
        let colLength = matrix[0].length;

        for (let r = 0; r < rowLength; r++) {
            let firstCol = matrix[r][0];
            let lastCol = matrix[r][colLength - 1];
            if (firstCol === target || lastCol === target) {
                return true;
            }
            if (target < firstCol || target > lastCol) {
                continue;
            }
            let left = 0;
            let right = colLength - 1;
            while (left <= right) {
                let mid = Math.floor((left + right) / 2);
                let curr = matrix[r][mid];
                if (curr === target) {
                    return true;
                } else if (curr < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return false;
    }
}
