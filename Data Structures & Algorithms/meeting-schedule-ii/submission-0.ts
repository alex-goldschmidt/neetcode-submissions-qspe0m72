/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals: Interval[]): number {
        let startIntervals = intervals
        .map((interval) => interval.start)
        .sort((a, b) => a - b);

        let endIntervals = intervals
        .map((interval) => interval.end)
        .sort((a, b) => a - b);

        let nextStart = 0;
        let nextEnd = 0;
        let occupiedRooms = 0;
        let maxRooms = 0;

        while (nextStart < startIntervals.length) {
            if (startIntervals[nextStart] < endIntervals[nextEnd]) {
                //if next start occurs before next ending
                occupiedRooms++;
                nextStart++;
                maxRooms = Math.max(maxRooms, occupiedRooms);
            } else {
                occupiedRooms--;
                nextEnd++;
            }
        }
        return maxRooms;
    }
}
