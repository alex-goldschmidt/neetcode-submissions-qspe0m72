class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        for (let str of strs) {
            let count = new Array(26).fill(0);
            for (let char of str) {
                count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }
            let key = count.join(",")
            if (!map[key]) {
                map[key] = [];
            }
            map[key].push(str);
        }
        return Object.values(map);
    }
}
