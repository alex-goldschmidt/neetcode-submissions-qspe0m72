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
    invertTree(root: TreeNode | null): TreeNode {
        if (!root) return null;
        let newNode = new TreeNode(root.val);
        newNode.left = this.invertTree(root.right);
        newNode.right = this.invertTree(root.left);
        return newNode;
    }
}
