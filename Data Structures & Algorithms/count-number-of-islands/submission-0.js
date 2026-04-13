class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let rowLength = grid.length;
        let colLength = grid[0].length;

        let visited = new Set();
        let count = 0;

        for (let r = 0; r < rowLength; r++) {
            for (let c = 0; c < colLength; c++) {
                const key = `${r},${c}`;
                if (grid[r][c] === "1" && !visited.has(key)) {
                    count++;
                    this.dfs(r, c, grid, visited, rowLength, colLength);
                }
            }
        }

        return count;  
    }

    dfs(rowIndex, colIndex, grid, visited, rowLength, colLength) {
        if (rowIndex < 0 || colIndex < 0 || 
        rowIndex >= rowLength || colIndex >= colLength
        ) {
            return;
        }

        if (grid[rowIndex][colIndex] !== '1') return;

        const key = `${rowIndex},${colIndex}`;
        if (visited.has(key)) return;

        visited.add(key);

        this.dfs(rowIndex + 1, colIndex, grid, visited, rowLength, colLength);
        this.dfs(rowIndex - 1, colIndex, grid, visited, rowLength, colLength);
        this.dfs(rowIndex, colIndex + 1, grid, visited, rowLength, colLength);
        this.dfs(rowIndex, colIndex - 1, grid, visited, rowLength, colLength);

    }
}
