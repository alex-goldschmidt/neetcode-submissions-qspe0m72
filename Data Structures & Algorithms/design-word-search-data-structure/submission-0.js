class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;

        for (const char of word) {
            if (!curr.children[char]) {
                curr.children[char] = new TrieNode();
            }
            curr = curr.children[char];
        }

        curr.isEndOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.dfs(this.root, word, 0);
    }

    /**
     * @param {TrieNode} node
     * @param {string} word
     * @param {number} index
     * @return {boolean}
     */
    dfs(node, word, index) {
        if (index === word.length) {
            return node.isEndOfWord;
        }

        let char = word[index];

        if (char !== ".") {
            if (!node.children[char]) return false;
            return this.dfs(node.children[char], word, index + 1);
        }

        for (const child of Object.values(node.children)) {
            if (this.dfs(child, word, index + 1)) return true;
        }

        return false;
    }
}
