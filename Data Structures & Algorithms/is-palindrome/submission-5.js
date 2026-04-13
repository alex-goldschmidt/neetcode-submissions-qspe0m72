class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;
        while (left < right) {
            while (left < right && !this.isAlphanumeric(s[left])) {
                left++;
            }

            while (left < right && !this.isAlphanumeric(s[right])) {
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

    isAlphanumeric(char) {
        const regex = /^[a-zA-Z0-9]+$/
        return regex.test(char);
    }
}
