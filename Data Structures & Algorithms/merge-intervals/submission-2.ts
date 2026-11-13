class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        intervals.sort((a, b) => a[0] - b[0]);
        const merged: number[][] = [];
        for (let interval of intervals) {
            const last = merged[merged.length - 1];
            if (!last || interval[0] > last[1]) {
                merged.push([...interval]);
            } else {
                last[1] = Math.max(interval[1], last[1]);
            }
        }
        return merged;
    }
}
