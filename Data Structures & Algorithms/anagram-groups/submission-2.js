class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        for (let str of strs) {
            let formattedString = this.formatString(str);
            if (!map[formattedString]) {
                map[formattedString] = [];
            }
            map[formattedString].push(str);
        }
        return Object.values(map);
    }

    formatString(str) {
        return str.split("").sort().join();
    }
}
