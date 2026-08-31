const INF = 2147483647;

class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
        let rowCount = grid.length;
        let colCount = grid[0].length;

        let queue = [];
        for (let r = 0; r < rowCount; r++) {
            for (let c = 0; c < colCount; c++) {
                if (grid[r][c] === 0) {
                    queue.push([r, c]);
                }
            }
        }

        let directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];

        while (queue.length > 0) {
            let [r, c] = queue.shift();
            for (let [rowDirection, colDirection] of directions) {
                let newRow = r + rowDirection;
                let newCol = c + colDirection;

                if (
                    this.isIndexOutOfRange(newRow, rowCount) ||
                    this.isIndexOutOfRange(newCol, colCount)
                ) {
                    continue;
                }

                if (grid[newRow][newCol] !== INF) {
                    continue;
                }

                grid[newRow][newCol] = grid[r][c] + 1;

                queue.push([newRow, newCol]);
            }
        }
    }

    isIndexOutOfRange(index, length) {
        return index < 0 || index >= length;
    }
}
