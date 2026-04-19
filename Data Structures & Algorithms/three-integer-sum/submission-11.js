class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b);
        let res = [];
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            if (nums[i] > 0) break;
            
            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                let currentSum = nums[left] + nums[i] + nums[right];
                if (currentSum < 0) {
                    left++;
                } else if (currentSum > 0) {
                    right--;
                } else {
                    res.push([nums[left], nums[i], nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]){
                        left++;
                    }
                }
            }
        }
        return res;
    }
}
