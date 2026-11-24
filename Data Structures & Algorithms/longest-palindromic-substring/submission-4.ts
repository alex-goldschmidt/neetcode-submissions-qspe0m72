class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {
        let bestStart = 0;
        let bestEnd = 0;

        function updateBestIfLonger(candidateStart: number, candidateEnd: number) {
            if (candidateEnd - candidateStart > bestEnd - bestStart) {
                bestStart = candidateStart;
                bestEnd = candidateEnd;
            }
        }

        for (let i = 0; i < s.length; i++) {
            const [oddStart, oddEnd] = this.expandFromCenter(s, i, i);
            const [evenStart, evenEnd] = this.expandFromCenter(s, i, i + 1);

            updateBestIfLonger(oddStart, oddEnd);
            updateBestIfLonger(evenStart, evenEnd);
        }

        let longest = s.slice(bestStart, bestEnd);
        return longest;
    }

    expandFromCenter(s: string, left: number, right: number): [number, number] {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }

        return [left + 1, right];
    }
}
