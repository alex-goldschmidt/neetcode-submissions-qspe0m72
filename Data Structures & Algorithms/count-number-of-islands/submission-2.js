class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0;
        let rowLength = grid.length;
        let colLength = grid[0].length;
        let visited = new Set();

        for (let r = 0; r < rowLength; r++) {
            for (let c = 0; c < colLength; c++) {
                let key = `${r},${c}`;
                if (grid[r][c] === "0" || visited.has(key)) {
                    continue;
                }
                count++;
                this.dfs(r, c, visited, grid, rowLength, colLength);
            }
        }
        return count;
    }

    dfs(r, c, visited, grid, rowLength, colLength) {
        if (r < 0 || c < 0 || r >= rowLength || c >= colLength) {
            return;
        }

        if (grid[r][c] !== "1") return;

        let key = `${r},${c}`;
        if (visited.has(key)) return;

        visited.add(key);

        this.dfs(r + 1, c, visited, grid, rowLength, colLength);
        this.dfs(r - 1, c, visited, grid, rowLength, colLength);
        this.dfs(r, c + 1, visited, grid, rowLength, colLength);
        this.dfs(r, c - 1, visited, grid, rowLength, colLength);

    }
}
