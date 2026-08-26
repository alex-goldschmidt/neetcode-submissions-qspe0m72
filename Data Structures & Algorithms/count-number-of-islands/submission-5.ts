class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let rowLength = grid.length;
        let colLength = grid[0].length;
        let count = 0;

        for (let r = 0; r < rowLength; r++) {
            for (let c = 0; c < colLength; c++) {
                if (grid[r][c] === "1") {
                    count++;
                    this.dfs(grid, r, c, rowLength, colLength);
                }
            }
        }

        return count;
    }

    dfs(grid, r, c, rowLength, colLength) {
        if (
            this.isIndexOutOfRange(r, rowLength) ||
            this.isIndexOutOfRange(c, colLength) ||
            grid[r][c] === "0"
        ) {
            return;
        }

        grid[r][c] = "0";

        this.dfs(grid, r + 1, c, rowLength, colLength);
        this.dfs(grid, r - 1, c, rowLength, colLength);
        this.dfs(grid, r, c + 1, rowLength, colLength);
        this.dfs(grid, r, c - 1, rowLength, colLength);

    }

    isIndexOutOfRange(index, length) {
        return index < 0 || index >= length;
    }
}
