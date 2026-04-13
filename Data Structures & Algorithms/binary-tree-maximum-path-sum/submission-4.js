class Solution {
  constructor() {
    this.currentMaxPathSum = -Infinity; // unused after we reset per call; ok to keep
  }

  /**
   * @param {TreeNode} root
   * @return {number}
   */
  maxPathSum(root) {
    // Reset per invocation to avoid leaking state across tests
    this.currentMaxPathSum = root ? root.val : Number.NEGATIVE_INFINITY;

    this.dfs(root);
    return this.currentMaxPathSum;
  }

  dfs(node) {
    if (!node) return 0;

    const leftGain = Math.max(this.dfs(node.left), 0);
    const rightGain = Math.max(this.dfs(node.right), 0);

    const through = node.val + leftGain + rightGain;
    if (through > this.currentMaxPathSum) {
      this.currentMaxPathSum = through;
    }

    // Return best one-side gain to parent
    return node.val + Math.max(leftGain, rightGain);
  }
}
