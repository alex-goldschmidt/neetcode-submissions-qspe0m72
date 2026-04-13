class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let answer = 0;
        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            let area = Math.min(heights[left], heights[right]) * (right - left);
            answer = Math.max(answer, area);
            if (heights[left] <= heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return answer;
    }
}
