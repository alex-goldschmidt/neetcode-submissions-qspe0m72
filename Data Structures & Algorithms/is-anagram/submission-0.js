class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        s = sortString(s);
        t = sortString(t);
        return s === t;
    }
}

    function sortString(string) {
        return string.split("").sort().join();
    }