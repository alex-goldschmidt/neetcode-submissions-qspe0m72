class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     * 1. dicts for both strings
     * 2. add characters to specific dictionaries
     * 3 loop over the dictionaries and compare values to oneanother
     * 4. if one character occurs more/less, not valid anagram
     * 5. else, it is valid anagram
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        
        let sDict = {};
        let tDict = {};
        for (let i = 0; i < s.length; i++) {
            sDict[s[i]] = (sDict[s[i]] || 0) + 1
            tDict[t[i]] = (tDict[t[i]] || 0) + 1
        }

        for (const key in sDict) {
            if (sDict[key] !== tDict[key]) {
                return false;
            }
        }

        return true;

    }
}
