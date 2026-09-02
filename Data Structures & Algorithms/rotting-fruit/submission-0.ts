const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];
enum GridState {
    EMPTY = 0,
    FRESH = 1,
    ROTTEN = 2,
}

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        if (!grid) return -1;

        let minutes = 0;
        const rowCount = grid.length;
        const colCount = grid[0].length;

        const queue = [];
        let freshCount = 0;

        for (let r = 0; r < rowCount; r++) {
            for (let c = 0; c < colCount; c++) {
                if (grid[r][c] === GridState.FRESH) {
                    freshCount++;
                }
                if (grid[r][c] === GridState.ROTTEN) {
                    queue.push([r, c]);
                }
            }
        }

        while (queue.length > 0 && freshCount > 0) {
            const levelSize = queue.length;
            for (let i = 0; i < levelSize; i++) {
                let [r, c] = queue.shift();
                for (let [rowDir, colDir] of directions) {
                    let newRow = r + rowDir;
                    let newCol = c + colDir;

                    if (
                        isIndexOutOfRange(newRow, rowCount) ||
                        isIndexOutOfRange(newCol, colCount)
                    ) {
                        continue;
                    }

                    if (grid[newRow][newCol] === GridState.FRESH) {
                        grid[newRow][newCol] = GridState.ROTTEN;
                        queue.push([newRow, newCol]);
                        freshCount--;
                    }
                }
            }
            minutes++;
        }

        if (freshCount !== 0) {
            return -1;
        }

        return minutes;
    }
}

function isIndexOutOfRange(index: number, length: number) {
    return index < 0 || index >= length;
}
