class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
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

    isAlphanumeric(char: string): boolean {
        const regex = /^[a-z0-9]+$/i;
        return regex.test(char);
    }
}
