/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node: Node | null): Node {
        if (!node) return null;

        const queue = [node];
        const clones = new Map<Node, Node>();

        clones.set(node, new Node(node.val));

        while (queue.length > 0) {
            const currentNode = queue.shift();

            for (let neighbor of currentNode.neighbors) {
                if (!clones.get(neighbor)) {
                    clones.set(neighbor, new Node(neighbor.val));
                    queue.push(neighbor);
                }

                const currentClone = clones.get(currentNode);
                const neighborClone = clones.get(neighbor);

                currentClone.neighbors.push(neighborClone);
            }
        }

        const deepCopy = clones.get(node);
        return deepCopy;
    }
}
