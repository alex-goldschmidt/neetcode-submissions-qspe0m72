class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const combinedArray = [...nums1, ...nums2];
        combinedArray.sort((a, b) => a - b);

        let mid = Math.floor(combinedArray.length / 2);
        if (this.isEven(combinedArray.length)) {
            let leftMid = combinedArray[mid - 1];
            let rightMid = combinedArray[mid];
            let median = (leftMid + rightMid) / 2;
            return median;
        } 
        return combinedArray[mid];
    }

    isEven(val) {
        return val % 2 === 0
    }
}
