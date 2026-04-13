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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    constructor() {
        this.preIndex = 0;
        this.inIndex = 0;
    }
    buildTree(preorder, inorder) {
        return this.dfs(Infinity, preorder, inorder);
    }

    dfs(limit, preorder, inorder) {
        if (this.preIndex >= preorder.length) {
            return null;
        }
        if (inorder[this.inIndex] === limit) {
            this.inIndex++;
            return null;
        }

        let rootVal = preorder[this.preIndex++];
        let root = new TreeNode(rootVal);

        root.left = this.dfs(rootVal, preorder, inorder);
        root.right = this.dfs(limit, preorder, inorder);

        return root;
    }
}
