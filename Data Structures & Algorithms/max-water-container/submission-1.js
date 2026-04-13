class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let answer = 0;
        while (left < right) {
            let area = (right - left) * Math.min(heights[left], heights[right]);
            answer = Math.max(area, answer);
            if (heights[left] <= heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return answer;
    }
}
