class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b);
        let ans = [];
        if (nums.length < 3) return [];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                let res = nums[i] + nums[left] + nums[right];
                if (res === 0) {
                    ans.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                } else if (res < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return ans;
    }
}
