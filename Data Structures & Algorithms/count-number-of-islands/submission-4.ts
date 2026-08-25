class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let rowCount = grid.length;
        let colCount = grid[0].length;
        let count = 0;

        for (let r = 0; r < rowCount; r++) {
            for (let c = 0; c < colCount; c++) {
                if (grid[r][c] === "1") {
                    count++;
                    this.dfs(grid, r, c, rowCount, colCount);
                }
            }
        }
        return count;
    }

    dfs(grid, rowIndex, colIndex, rowCount, colCount) {
        if (
            this.isIndexOutOfBounds(rowIndex, rowCount) ||
            this.isIndexOutOfBounds(colIndex, colCount) ||
            grid[rowIndex][colIndex] === "0"
        ) {
            return;
        }
        grid[rowIndex][colIndex] = "0";

        this.dfs(grid, rowIndex + 1, colIndex, rowCount, colCount);
        this.dfs(grid, rowIndex - 1, colIndex, rowCount, colCount);
        this.dfs(grid, rowIndex, colIndex + 1, rowCount, colCount);
        this.dfs(grid, rowIndex, colIndex - 1, rowCount, colCount);
    }

    isIndexOutOfBounds(index, count) {
        return index < 0 || index >= count;
    }
}
