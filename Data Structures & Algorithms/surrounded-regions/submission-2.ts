enum GridState {
    X = "X",
    O = "O",
    S = "S"
}

const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
];

class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board: string[][]): void {
        if (!board || board.length === 0) return;
        const queue = [];
        const rowLength = board.length;
        const colLength = board[0].length;

        for (let r = 0; r < rowLength; r++) {
            if (board[r][0] === GridState.O) {
                board[r][0] = GridState.S;
                queue.push([r, 0]);
            }

            if (board[r][colLength - 1] === GridState.O) {
                board[r][colLength - 1] = GridState.S;
                queue.push([r, colLength - 1]);
            }
        }

        for (let c = 0; c < colLength; c++) {
            if (board[0][c] === GridState.O) {
                board[0][c] = GridState.S;
                queue.push([0, c]);
            }

            if (board[rowLength - 1][c] === GridState.O) {
                board[rowLength - 1][c] = GridState.S;
                queue.push([rowLength - 1, c])
            }
        }

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

                if (board[newRow][newCol] !== GridState.O) continue;

                board[newRow][newCol] = GridState.S;
                queue.push([newRow, newCol]);
            }
        }

        for (let r = 0; r < rowLength; r++) {
            for (let c = 0; c < colLength; c++) {
                if (board[r][c] === GridState.O) {
                    board[r][c] = GridState.X;
                } else if (board[r][c] === GridState.S) {
                    board[r][c] = GridState.O;
                }
            }
        }
    }

    isOutOfRange(index: number, length: number) {
        return index < 0 || index >= length;
    }
}
