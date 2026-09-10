class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges: number[][]): number[] {
        let res = [];
        let graph = new Map<number, number[]>();
        let visited = new Set<number>();

        for (let i = 0; i <= edges.length; i++) {
            graph.set(i, []);
        }

        function dfs(node: number, target: number): boolean {
            if (node === target) return true;
            visited.add(node);

            for (let neighbor of graph.get(node)) {
                if (visited.has(neighbor)) continue;
                if (dfs(neighbor, target)) return true;
            }

            return false;
        }

        for (let [node1, node2] of edges) {
            visited.clear();
            if (dfs(node1, node2)) {
                res.push([node1, node2]);
            } else {
                graph.get(node1).push(node2);
                graph.get(node2).push(node1);
            }
        }

        return res[res.length - 1];
    }
}
