/**
 * Definition for a binary tree node.
 * class TreeNode {
 *   constructor(val = 0, left = null, right = null) {
 *     this.val = val;
 *     this.left = left;
 *     this.right = right;
 *   }
 * }
 */

class Solution {
   constructor() {
      this.count = 0;
      this.result = null;
   }

   /**
    * @param {TreeNode} root
    * @param {number} k
    * @return {number|null}
    */
   kthSmallest(root, k) {
      if (!root) return null; 

      this.dfs(root, k);
      return this.result;
   }

   /**
    * In-order traversal until the k-th node is found.
    * @param {TreeNode} node
    * @param {number} k
    */
   dfs(node, k) {
      if (!node || this.result !== null) return;

      this.dfs(node.left, k);

      this.count++;
      if (this.count === k) {
         this.result = node.val;
         return;
      }

      this.dfs(node.right, k);
   }
}