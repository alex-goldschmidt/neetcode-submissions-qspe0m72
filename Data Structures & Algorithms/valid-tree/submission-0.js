class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length > n - 1) return false;

        const adjacencyList = Array.from({length: n}, () => []);

        for (const [u, v] of edges) {
            adjacencyList[u].push(v);
            adjacencyList[v].push(u);
        }
        const visited = new Set();
        const queue = [[0, -1]];

        visited.add(0);

        while (queue.length > 0) {
            const [node, parent] = queue.pop();

            for (const neighbor of adjacencyList[node]) {
                if (neighbor === parent) continue;
                if (visited.has(neighbor)) return false;
                visited.add(neighbor);
                queue.push([neighbor, node]);
            }
        }

        return visited.size === n;
    }
}
