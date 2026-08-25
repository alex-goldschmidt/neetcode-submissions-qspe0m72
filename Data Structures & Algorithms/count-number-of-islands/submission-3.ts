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
                    this.dfs(grid, r, c);
                }
            }
        }

        return count;
    }

    dfs(grid, rowIndex, colIndex) {
        let rowCount = grid.length;
        let colCount = grid[0].length;
        if (
            rowIndex < 0 ||
            rowIndex >= rowCount ||
            colIndex < 0 ||
            colIndex >= colCount ||
            grid[rowIndex][colIndex] === "0"
        ) {
            return;
        }

        grid[rowIndex][colIndex] = "0";

        this.dfs(grid, rowIndex + 1, colIndex);
        this.dfs(grid, rowIndex - 1, colIndex);
        this.dfs(grid, rowIndex, colIndex + 1);
        this.dfs(grid, rowIndex, colIndex - 1);
    }
}
