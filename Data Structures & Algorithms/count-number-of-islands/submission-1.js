class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0;
        let rowLength = grid.length;
        let colLength = grid[0].length;
        let visitedSet = new Set();

        for (let r = 0; r < rowLength; r++) {
            for (let c = 0; c < colLength; c++) {
                let key = `${r},${c}`;
                if (grid[r][c] === "1" && !visitedSet.has(key)) {
                    count++
                    this.dfs(r, c, grid, visitedSet, rowLength, colLength);
                }
            }
        }

        return count;
    }

    dfs(rowIndex, colIndex, grid, visitedSet, rows, cols) {
        if (rowIndex < 0 || rowIndex >= rows ||
            colIndex < 0 || colIndex >= cols) {
                return;
        }

        if (grid[rowIndex][colIndex] !== "1") return;

        let key = `${rowIndex},${colIndex}`;
        if (visitedSet.has(key)) return;

        visitedSet.add(key);

        this.dfs(rowIndex + 1, colIndex, grid, visitedSet, rows, cols);
        this.dfs(rowIndex - 1, colIndex, grid, visitedSet, rows, cols)
        this.dfs(rowIndex, colIndex + 1, grid, visitedSet, rows, cols)
        this.dfs(rowIndex, colIndex - 1, grid, visitedSet, rows, cols)

    }
}
