class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for (let s of strs) {
            const sortedString = s.split("").sort().join("");
            if (!res[sortedString]) {
                res[sortedString] = [];
            }
            res[sortedString].push(s);
        }
        return Object.values(res);
    }
}
