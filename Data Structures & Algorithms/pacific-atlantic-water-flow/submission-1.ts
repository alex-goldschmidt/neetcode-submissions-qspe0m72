const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
]

class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
        if (!heights) return null;
        const res = [];
        const { rowLength, colLength } = this.getLengths(heights);
        const pacificQueue = [];
        const pacificSeen = new Set<string>();
        const atlanticQueue = [];
        const atlanticSeen = new Set<string>();

        for (let r = 0; r < rowLength; r++) {
            pacificQueue.push([r, 0]);
            pacificSeen.add(`${r},0`);

            atlanticQueue.push([r, colLength - 1]);
            atlanticSeen.add(`${r},${colLength - 1}`)
        }

        for (let c = 0; c < colLength; c++) {
            pacificQueue.push([0, c]);
            pacificSeen.add(`0,${c}`);

            atlanticQueue.push([rowLength - 1, c]);
            atlanticSeen.add(`${rowLength - 1},${c}`);
        }

        this.bfs(heights, pacificQueue, pacificSeen);
        this.bfs(heights, atlanticQueue, atlanticSeen);
        
        for (let r = 0; r < rowLength; r++) {
            for (let c = 0; c < colLength; c++) {
                let key = `${r},${c}`;
                if (pacificSeen.has(key) && atlanticSeen.has(key)) {
                    res.push([r, c]);
                }
            }
        }

        return res;
    }

    bfs(heights: number[][], queue: number[][], seen: Set<string>) {
        const { rowLength, colLength } = this.getLengths(heights);
        while (queue.length > 0) {
            const [r, c] = queue.shift();
            for (let [rowDir, colDir] of directions) {
                let newRow = r + rowDir;
                let newCol = c + colDir;

                if (
                    this.isOutOfRange(newRow, rowLength) ||
                    this.isOutOfRange(newCol, colLength)
                ) {
                    continue;
                }
                const key = `${newRow},${newCol}`;
                if (seen.has(key)) continue;

                //if cant flow uphill
                if (heights[newRow][newCol] < heights[r][c]) {
                    continue;
                }

                seen.add(key);
                queue.push([newRow, newCol]);
            }
        }
    }

    isOutOfRange(index, length) {
        return index < 0 || index >= length;
    }

    getLengths(graph: number[][]) {
        const rowLength = graph.length;
        const colLength = graph[0].length;
        return { rowLength, colLength }
    }
}
