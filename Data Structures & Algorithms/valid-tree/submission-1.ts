class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        let visited = new Set<number>();
        let graph = new Map<number, number[]>();

        for (let i = 0; i < n; i++) {
            graph.set(i, []);
        }

        for (let [node1, node2] of edges) {
            graph.get(node1).push(node2);
            graph.get(node2).push(node1);
        }
        function dfs(node: number, parent: number): boolean {
            visited.add(node);

            for (let neighbor of graph.get(node)) {
                if (neighbor === parent) continue;
                if (visited.has(neighbor)) return false;
                if (!dfs(neighbor, node)) return false;
            }
            return true;
        }

        if (!dfs(0, -1)) return false;

        return visited.size === n;
    }
}
