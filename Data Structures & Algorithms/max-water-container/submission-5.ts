class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length - 1;
        let maxArea = 0;
        while (left <= right) {
            let height = Math.min(heights[left], heights[right]);
            let base = right - left;
            let currentArea = base * height;
            maxArea = Math.max(currentArea, maxArea);
            heights[left] <= heights[right] ? left++ : right--;
        }

        return maxArea;
    }
}
