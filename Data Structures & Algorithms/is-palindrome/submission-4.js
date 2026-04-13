class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            while (left < right && !this.isAlphaNumeric(s[left])) {
                left++;
            }

            while (left < right && !this.isAlphaNumeric(s[right])) {
                right--;
            }

            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    isAlphaNumeric(char) {
        let regex = /^[a-zA-Z0-9]+$/;
        return regex.test(char);
    }
}
