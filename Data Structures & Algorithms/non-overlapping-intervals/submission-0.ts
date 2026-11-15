class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals: number[][]): number {
        if (intervals.length === 0) return 0;
        intervals.sort((a, b) => a[0] - b[0]);

        let removals = 0;
        let prevEnd = intervals[0][1];
        for (let i = 1; i < intervals.length; i++) {
            let curr = intervals[i];
            if (prevEnd > curr[0]) {
            //overlap --> remove and set prevEnd to whatever is smalled of that and the curr end
                removals++;
                prevEnd = Math.min(prevEnd, curr[1]);
            } else {
                //no overlap, keep current Interval end
                prevEnd = curr[1];
            }
            
        }
        return removals;
    }
}
