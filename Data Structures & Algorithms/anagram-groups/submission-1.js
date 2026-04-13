class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        for (let s of strs) {
            let formattedString = formatString(s);
            if (!map[formattedString]) {
                map[formattedString] = [];
            }
            map[formattedString].push(s);
        }

        return Object.values(map);
    }
}

function formatString(s) {
    return s.split("").sort().join();
}