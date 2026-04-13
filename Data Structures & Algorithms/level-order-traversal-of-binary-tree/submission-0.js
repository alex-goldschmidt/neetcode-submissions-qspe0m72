class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        return this.dfs([], root, 0);
    }

    dfs(resultArray, node, depth) {
        if (!node) return resultArray;

        if (resultArray.length === depth) {
            resultArray.push([]);
        }

        resultArray[depth].push(node.val);

        this.dfs(resultArray, node.left, depth + 1);
        this.dfs(resultArray, node.right, depth + 1);

        return resultArray;
    }
}
