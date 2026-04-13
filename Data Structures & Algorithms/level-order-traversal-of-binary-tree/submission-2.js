/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        return this.dfs([], root, 0)
    }

    dfs(resultArr, node, depth) {
        if (!node) return resultArr;
        if (resultArr.length === depth) {
            resultArr.push([]);
        }

        resultArr[depth].push(node.val);

        this.dfs(resultArr, node.left, depth + 1);
        this.dfs(resultArr, node.right, depth + 1);

        return resultArr;
    }
}
