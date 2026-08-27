class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        let rowLength = grid.length;
        let colLength = grid[0].length;

        let maxArea = 0;
        for (let r = 0; r < rowLength; r++) {
            for (let c = 0; c < colLength; c++) {
                maxArea = Math.max(maxArea, this.dfs(grid, r, c, rowLength, colLength));
            }
        }
        return maxArea;
    }

    dfs(grid, r, c, rowLength, colLength) {
        if (
            this.isIndexOutOfRange(r, rowLength) ||
            this.isIndexOutOfRange(c, colLength) ||
            grid[r][c] === 0
        ) {
            return 0;
        }

        grid[r][c] = 0;
        return (
            1 +
            this.dfs(grid, r + 1, c, rowLength, colLength) +
            this.dfs(grid, r - 1, c, rowLength, colLength) +
            this.dfs(grid, r, c + 1, rowLength, colLength) +
            this.dfs(grid, r, c - 1, rowLength, colLength)
        );
    }

    isIndexOutOfRange(index, length) {
        return index < 0 || index >= length;
    }
}
