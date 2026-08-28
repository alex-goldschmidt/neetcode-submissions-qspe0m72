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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        if (!root) return [];
        const queue = [root];
        const res = [];

        while (queue.length > 0) {
            const levelSize = queue.length;
            const level = [];

            for (let i = 0; i < levelSize; i++) {
                let curr = queue.shift();
                level.push(curr.val);

                if (curr.left) queue.push(curr.left)
                if (curr.right) queue.push(curr.right);
            }
            //push right side of node into the res array
            res.push(level[level.length - 1]);
        }
        return res;
    }
}
