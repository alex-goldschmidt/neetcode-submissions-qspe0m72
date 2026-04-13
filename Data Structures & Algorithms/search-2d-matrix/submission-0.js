class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(let row of matrix) {
            let isInMatrix = this.binarySeach(row, target);
            if (isInMatrix) return true;
        }

        return false;
    }

    binarySeach(arr, target) {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            let mid = Math.floor(left + right / 2);
            if (arr[mid] === target) {
                return true;
            } else if (arr[mid] < target) {
                left = left + 1;
            } else {
                right = right - 1;
            }
        }
        return false;
    }
}
