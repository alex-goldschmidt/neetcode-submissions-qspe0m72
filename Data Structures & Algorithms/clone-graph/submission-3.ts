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
            let current = queue.shift();
            for (let neighbor of current.neighbors) {
                if (!clones.get(neighbor)) {
                    queue.push(neighbor);
                    clones.set(neighbor, new Node(neighbor.val));
                }
                let currentClone = clones.get(current);
                let neighborClone = clones.get(neighbor);

                currentClone.neighbors.push(neighborClone);
            }
        }
        let deepCopy = clones.get(node);
        return deepCopy;
    }
}
