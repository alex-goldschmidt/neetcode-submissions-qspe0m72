class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals: number[][], newInterval: number[]): number[][] {
        const res: number[][] = [];
        for (let i = 0; i < intervals.length; i++) {
            const curr = intervals[i];
            if (newInterval === null) {
                res.push(curr);
                continue;
            }

            const currentComesBeforeNew = curr[1] < newInterval[0];
            const newComesBeforeCurrent = curr[0] > newInterval[1];

            if (newInterval === null || currentComesBeforeNew) {
                res.push(curr);
            } else if (newComesBeforeCurrent) {
                res.push(newInterval);
                res.push(curr);
                newInterval = null;
            } else {
                newInterval[0] = Math.min(curr[0], newInterval[0]);
                newInterval[1] = Math.max(curr[1], newInterval[1]);
            }
        }
        if (newInterval !== null) res.push(newInterval);
        return res;
    }
}
