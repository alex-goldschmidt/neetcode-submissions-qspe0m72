class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        if (prerequisites.length === 0) return true;
        let graph = new Map<number, number[]>();
        let coursesInCurrentPath = new Set();
        let completedCourses = new Set();

        for (let course = 0; course < numCourses; course++) {
            graph.set(course, [])
        }

        for (let [course, prereq] of prerequisites) {
            graph.get(prereq).push(course);
        }

        function dfs(course: number): boolean {
            if (coursesInCurrentPath.has(course)) { //cycle
                return false;
            }

            if (completedCourses.has(course)) {
                return true;
            }

            coursesInCurrentPath.add(course);

            const neighbors = graph.get(course);

            for (let neighbor of neighbors) {
                if (!dfs(neighbor)) {
                    return false;
                }
            }

            coursesInCurrentPath.delete(course);
            completedCourses.add(course);

            return true;
        }

        for (let course = 0; course < numCourses;course++) {
            if (!dfs(course)) {
                return false;
            }
        }

        return true;
    }
}
