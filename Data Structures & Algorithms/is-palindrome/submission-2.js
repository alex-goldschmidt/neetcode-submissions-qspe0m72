class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let filteredString = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
        let reversedString = filteredString.split("").reverse().join("");
        return filteredString === reversedString;
    }
}
