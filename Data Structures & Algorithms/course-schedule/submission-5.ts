class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prereqs
     * @return {boolean}
     */
    canFinish(numCourses: number, prereqs: number[][]): boolean {
        if (prereqs.length === 0) return true;

        const graph = new Map<number, number[]>();
        const classesInPath = new Set<number>();
        const completedClasses = new Set<number>();

        for (let course = 0; course < numCourses; course++) {
            graph.set(course, []);
        }

        for (let [course, prereq] of prereqs) {
            graph.get(prereq).push(course);
        }

        function dfs(course: number): boolean {

            if (classesInPath.has(course)) {
                return false;
                //course already exists in current DFS path --> we have cycle
            }

            if (completedClasses.has(course)) {
                return true;
            }

            classesInPath.add(course);

            let neighbors = graph.get(course);

            for (let neighbor of neighbors) {
                if (!dfs(neighbor)) {
                    return false;
                }
            }

            classesInPath.delete(course);
            completedClasses.add(course);

            return true;
        }

        for (let course = 0; course < numCourses; course++) {
            if (!dfs(course)) return false;
        }

        return true;
    }
}
