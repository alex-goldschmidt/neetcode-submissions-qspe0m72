class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let rows = board.length;
        let cols = board[0].length;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (this.dfs(r, c, 0, rows, cols, word, board)) {
                    return true;
                }
            }
        }
        return false
    }

    dfs (r, c, i, rows, cols, word, board) {
        if (i === word.length) return true;
        if (r < 0 ||
            c < 0 ||
            r >= rows ||
            c >= cols ||
            board[r][c] === "#" || 
            board[r][c] !== word[i]) {
                return false;
        }

        board[r][c] = "#";

        const result = 
            this.dfs(r + 1, c, i + 1, rows, cols, word, board) ||
            this.dfs(r - 1, c, i + 1, rows, cols, word, board) ||
            this.dfs(r, c + 1, i + 1, rows, cols, word, board) ||
            this.dfs(r, c - 1, i + 1, rows, cols, word, board);

        board[r][c] = word[i];

        return result;
    }
}
