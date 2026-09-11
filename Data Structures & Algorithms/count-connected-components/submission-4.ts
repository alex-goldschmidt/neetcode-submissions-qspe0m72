class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        let count = 0;
        let graph = new Map<number, number[]>();
        let visited = new Set<number>();

        for (let i = 0; i < n; i++) {
            graph.set(i, []);
        }

        for (let [node1, node2] of edges) {
            graph.get(node1).push(node2);
            graph.get(node2).push(node1);
        }

        function dfs(node: number): void {
            visited.add(node);
            for (let neighbor of graph.get(node)) {
                if (visited.has(neighbor)) continue;
                dfs(neighbor);
            }
        }

        for (let node = 0; node < n; node++) {
            if (!visited.has(node)) {
                count++;
                dfs(node);
            }
        }
        return count;
    }
}
