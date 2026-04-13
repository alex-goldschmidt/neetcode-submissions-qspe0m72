class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (!strs || strs.length === 0) return null;
        let map = {};
        for (let str of strs) {
            let arr = new Array(26).fill(0);
            for (let char of str) {
                arr[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }
            let key = arr.join(",");
            if (!map[key]) {
                map[key] = [];
            }
            map[key].push(str);
        }
        return Object.values(map);
    }
}
