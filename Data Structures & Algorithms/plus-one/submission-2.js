class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        for (let i = digits.length - 1; i >=0; i--) {
            if (digits[i] !== 9) {
                digits[i] = digits[i] + 1;
                break;
            } else {
                digits[i] = 0;
                if (i === 0) {
                    digits[i] = 1;
                    digits.push(0);
                    break;
                }
            }
        }
        return digits;
    }
}
