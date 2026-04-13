class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let sDict = {};
        let tDict = {};

        for (let i = 0; i < s.length; i++) {
            sDict[s[i]] = (sDict[s[i]] || 0) + 1;
            tDict[t[i]] = (tDict[t[i]] || 0) + 1;
        }

        for (let key in sDict) {
            if (sDict[key] !== tDict[key]) {
                return false;
            }
        }

        return true;
    }
}
