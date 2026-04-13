class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];
        
        let withFirstNumList = nums.slice(0, -1);
        let withLastNumList = nums.slice(1);
        let withFirstSum = this.robHouses(withFirstNumList);
        let withLastSum = this.robHouses(withLastNumList);

        return Math.max(withFirstSum, withLastSum);

    }

    robHouses(numsSection) {
        let rob1 = 0;
        let rob2 = 0;
        for (let num of numsSection) {
            const temp = Math.max(rob1 + num, rob2);
            rob1 = rob2;
            rob2 = temp;
        }
        return rob2;
    }
}
