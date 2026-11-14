class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let { rowLength, colLength } = this.getLengths(grid);
        let count = 0;
        for (let r = 0; r < rowLength; r++) {
            for (let c = 0; c < colLength; c++) {
                if (grid[r][c] === "1") {
                    count++;
                    this.dfs(grid, r, c);
                }
            }
        }
        return count;
    }

    dfs(grid: string[][], r: number, c: number) {
        let { rowLength, colLength } = this.getLengths(grid);
        if (
            this.isOutOfRange(r, rowLength) ||
            this.isOutOfRange(c, colLength) ||
            grid[r][c] === "0"
        ) {
            return;
        }

        grid[r][c] = "0";
        this.dfs(grid, r + 1, c);
        this.dfs(grid, r - 1, c);
        this.dfs(grid, r, c + 1);
        this.dfs(grid, r, c - 1);
    }

    getLengths(grid: string[][]) {
        let rowLength = grid.length;
        let colLength = grid[0].length;
        return { rowLength, colLength };
    }

    isOutOfRange(index: number, length: number) {
        return index < 0 || index >= length;
    }
}
