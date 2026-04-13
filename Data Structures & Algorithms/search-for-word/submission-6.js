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
                if (this.dfs(r, c, 0, rows, cols, board, word)) {
                    return true;
                }
            }
        }
        return false;
    }

    dfs(r, c, index, rows, cols, board, word) {
        if (index === word.length) return true;
        if (
            r < 0 ||
            c < 0 ||
            r >= rows ||
            c >= cols ||
            board[r][c] === "#" ||
            board[r][c] !== word[index]
        ) {
            return false;
        }

        board[r][c] = "#";
        const result = 
            this.dfs(r + 1, c, index + 1, rows, cols, board, word) ||
            this.dfs(r - 1, c, index + 1, rows, cols, board, word) ||
            this.dfs(r, c + 1, index + 1, rows, cols, board, word) ||
            this.dfs(r, c - 1, index + 1, rows, cols, board, word);

        board[r][c] = word[index];

        return result;
    }
}
