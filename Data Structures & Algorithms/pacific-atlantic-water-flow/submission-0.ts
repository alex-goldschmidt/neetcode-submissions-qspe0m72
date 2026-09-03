const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];

class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
        if (!heights || heights.length === 0) return [];

        const pacificQueue: number[][] = [];
        const pacificSeen = new Set<string>();

        const atlanticQueue: number[][] = [];
        const atlanticSeen = new Set<string>();

        const { rowLength, colLength} = getRowAndColLength(heights);

        for (let r = 0; r < rowLength; r++) {
            pacificQueue.push([r, 0]);
            pacificSeen.add(`${r},0`);

            atlanticQueue.push([r, colLength - 1]);
            atlanticSeen.add(`${r},${colLength - 1}`);
        }

        for (let c = 0; c < colLength; c++) {
            pacificQueue.push([0, c]);
            pacificSeen.add(`0,${c}`);

            atlanticQueue.push([rowLength - 1, c]);
            atlanticSeen.add(`${rowLength - 1},${c}`);
        }

        this.bfs(heights, pacificQueue, pacificSeen);
        this.bfs(heights, atlanticQueue, atlanticSeen);

        const result: number[][] = [];

        for (let r = 0; r < rowLength; r++) {
            for (let c = 0; c < colLength; c++) {
                const key = `${r},${c}`;
                if (pacificSeen.has(key) && atlanticSeen.has(key)) {
                    result.push([r, c]);
                }
            }
        }

        return result;
    }

    bfs(
        heights: number[][],
        queue: number[][],
        seen: Set<string>,
    ) {
        const { rowLength, colLength} = getRowAndColLength(heights);
        while (queue.length > 0) {
            const [r, c] = queue.shift()!;

            for (const [rowDir, colDir] of directions) {
                const newRow = r + rowDir;
                const newCol = c + colDir;

                if (isOutOfRange(newRow, rowLength) || isOutOfRange(newCol, colLength)) {
                    continue;
                }

                const key = `${newRow},${newCol}`;

                if (seen.has(key)) {
                    continue;
                }
                if (heights[newRow][newCol] < heights[r][c]) {
                    continue;
                }

                seen.add(key);
                queue.push([newRow, newCol]);
            }
        }
    }
}

function isOutOfRange(index: number, length: number) {
    return index < 0 || index >= length;
}

function getRowAndColLength(heights: number[][]) {
    let rowLength = heights.length;
    let colLength = heights[0].length;
    return { rowLength, colLength }
}
