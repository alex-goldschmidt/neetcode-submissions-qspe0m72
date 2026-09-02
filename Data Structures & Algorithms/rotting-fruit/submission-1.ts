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

        let queue = [];
        let minutes = 0;
        let freshCount = 0;
        let rowCount = grid.length;
        let colCount = grid[0].length;

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
                const [r, c] = queue.shift();
                for (let [rowDir, colDir] of directions) {
                    let newRow = r + rowDir;
                    let newCol = c + colDir;

                    if (
                        isOutOfRange(newRow, rowCount) || 
                        isOutOfRange(newCol, colCount)) 
                    {
                        continue;
                    }

                    if (grid[newRow][newCol] === GridState.FRESH) {
                        freshCount--;
                        grid[newRow][newCol] = GridState.ROTTEN;
                        queue.push([newRow, newCol]);
                    }
                }
            }
            minutes++;
        }

        if (freshCount > 0) return -1;
        return minutes;
    }
}

function isOutOfRange(index: number, length: number) {
    return index < 0 || index >= length;
}
