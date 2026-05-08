class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxArea = 0;
        while (left < right) {
            let base = right - left;
            let height = Math.min(heights[left], heights[right]);
            let currentArea = base * height;
            maxArea = Math.max(currentArea, maxArea);
            if (heights[left] <= heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxArea;
    }
}
