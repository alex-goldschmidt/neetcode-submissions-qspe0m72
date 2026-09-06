class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prereqs
     * @return {number[]}
     */
    findOrder(numCourses: number, prereqs: number[][]): number[] {
        const graph = new Map<number, number[]>();
        const classesInCurrentPath = new Set<number>();
        const completedClasses = new Set<number>();
        const res = [];

        for (let course = 0; course < numCourses; course++) {
            graph.set(course, []);
        }

        for (let [course, prereq] of prereqs) {
            graph.get(course).push(prereq);
        }

        function dfs(course: number): boolean {
            if (classesInCurrentPath.has(course)) {
                return false;
            }

            if (completedClasses.has(course)) {
                return true;
            }

            classesInCurrentPath.add(course);

            let neighbors = graph.get(course);

            for (let neighbor of neighbors) {
                if (!dfs(neighbor)) return false;
            }

            classesInCurrentPath.delete(course);
            completedClasses.add(course);

            res.push(course);
            return true;
        }

        for (let course = 0; course < numCourses; course++) {
            if (!dfs(course)) return [];
        }

        return res;
    }
}
