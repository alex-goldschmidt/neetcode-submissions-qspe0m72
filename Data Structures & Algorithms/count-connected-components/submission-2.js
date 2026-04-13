class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    constructor() {
        this.count = 0;
    }
    countComponents(n, edges) {
        const adjacencyList = Array.from({length: n}, () => []);

        for (let [u, v] of edges) {
            adjacencyList[u].push(v);
            adjacencyList[v].push(u);
        }

        let count = 0;

        const visited = new Set();

        for (let node = 0; node < n; node++) {
            if (!visited.has(node)) {
                this.dfs(node, adjacencyList, visited);
                count++;
            }
        }

        return count;
    }

    dfs(node, graph, visited = new Set()) {
        if (visited.has(node)) return;
        visited.add(node);
        for (let neighbor of graph[node]) {
            this.dfs(neighbor, graph, visited);
        }
    }
}
