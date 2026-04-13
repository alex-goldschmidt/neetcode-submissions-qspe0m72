class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];
        let withLast = nums.slice(0, -1);
        let withFirst = nums.slice(1);
        
        let robLastHouse = this.robHouses(withLast);
        let robFirstHouse = this.robHouses(withFirst);
        
        return Math.max(robLastHouse, robFirstHouse);
    }

    robHouses(numsSection) {
        let rob1 = 0;
        let rob2 = 0;
        for (let i = 0; i < numsSection.length; i++) {
            const temp = Math.max(numsSection[i] + rob1, rob2);
            rob1 = rob2;
            rob2 = temp;
        }
        return rob2;
    }
}
