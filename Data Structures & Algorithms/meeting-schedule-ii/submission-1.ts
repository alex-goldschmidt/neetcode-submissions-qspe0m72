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
        let startTimes = intervals.map((interval) => interval.start).sort((a, b) => a - b);

        let endTimes = intervals.map((interval) => interval.end).sort((a, b) => a - b);

        let nextStart = 0;
        let nextEnd = 0;
        let occupiedRooms = 0;
        let maxRooms = 0;

        while (nextStart < startTimes.length) {
            if (startTimes[nextStart] < endTimes[nextEnd]) {
                // if next start occurs before next end
                occupiedRooms++;
                nextStart++;
                maxRooms = Math.max(occupiedRooms, maxRooms);
            } else {
                occupiedRooms--;
                nextEnd++
            }
        }
        return maxRooms;
    }
}
