class Solution {
  /**
   * @param {string} s
   * @return {string}
   */
  longestPalindrome(s) {
    if (s.length <= 1) return s;

    let bestStart = 0;
    let bestLength = 1;

    for (let center = 0; center < s.length; center++) {
      const odd = this.expandFromCenter(s, center, center);
      if (odd.length > bestLength) {
        bestStart = odd.start;
        bestLength = odd.length;
      }

      // Even-length palindromes: "abba"
      const even = this.expandFromCenter(s, center, center + 1);
      if (even.length > bestLength) {
        bestStart = even.start;
        bestLength = even.length;
      }
    }

    return s.slice(bestStart, bestStart + bestLength);
  }

  expandFromCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    // We went 1 step too far on both sides
    const start = left + 1;
    const length = right - left - 1;

    return { start, length };
  }
}
