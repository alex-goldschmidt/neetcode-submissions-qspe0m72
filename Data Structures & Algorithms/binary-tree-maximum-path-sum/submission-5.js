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
     * @return {number}
     */

    constructor() {
        this.currentMaxPathSum = -Infinity;
    }

    maxPathSum(root) {
        this.currentMaxPathSum = root ? root.val : Number.NEGATIVE_INFINITY;
        this.dfs(root);
        return this.currentMaxPathSum;
    }

    dfs(node) {
        if (!node) return 0;
        let leftMax = Math.max(this.dfs(node.left), 0);
        let rightMax = Math.max(this.dfs(node.right), 0)

        let currentSum = node.val + leftMax + rightMax;
        if (currentSum > this.currentMaxPathSum) {
            this.currentMaxPathSum = currentSum;
        }

        return node.val + Math.max(leftMax, rightMax);
    }
}


