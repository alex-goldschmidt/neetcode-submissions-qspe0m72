class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        intervals.sort((a ,b) => a[0] - b[0]);
        const merged: number[][] = [];
        for (let i = 0; i < intervals.length; i++) {
            const curr = intervals[i];
            const last = merged[merged.length - 1];

            if (!last || curr[0] > last[1]) {
                merged.push([...curr]);
            } else {
                last[1] = Math.max(curr[1], last[1]);
            }
        }

        return merged;
    }
}
