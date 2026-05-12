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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) return null;

        let newTree = new TreeNode(root.val);
        newTree.left = this.invertTree(root.right)
        newTree.right = this.invertTree(root.left);

        return newTree;
    }
}
