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
    goodNodes(root: TreeNode | null): number {
        if (!root) return 0;

        const queue = [[root, root.val]];
        let count = 0;
        while (queue.length > 0) {
            const [node, maxSoFar] = queue.shift();

            if (node.val >= maxSoFar) {
                count++;
            }
            
            let newMax = Math.max(node.val, maxSoFar);
            if (node.left) {
                queue.push([node.left, newMax]);
            }
            if (node.right) {
                queue.push([node.right, newMax]);
            }
        }
        return count;
    }
}
