class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const visited = new Set();
        let adjacencyList = Array.from({length: n}, () => []);
        for (let [u, v] of edges) {
            adjacencyList[u].push(v);
            adjacencyList[v].push(u);
        }

        let count = 0;

        for (let node = 0; node < n; node++) {
            if (!visited.has(node)) {
                count++;
                this.dfs(node, adjacencyList, visited);
            }
        }

        return count;
    }

    dfs(node, adjacencyList, visited) {
        if (visited.has(node)) return;
        visited.add(node);
        for (const neighbor of adjacencyList[node]) {
            this.dfs(neighbor, adjacencyList, visited);
        }
    }
}
