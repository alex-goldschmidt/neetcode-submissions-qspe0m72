class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        let combined = [...nums1, ...nums2];
        let left = 0;
        let right = combined.length - 1;
        let count = combined.length;
        combined.sort((a, b) => a - b);
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (!this.isEven(count)) {
                return combined[mid];
            } else {
                let median = (combined[mid] + combined[mid + 1]) / 2;
                return median;
            }
        }
    }

    isEven(count: number) {
        return count % 2 === 0;
    }
}
