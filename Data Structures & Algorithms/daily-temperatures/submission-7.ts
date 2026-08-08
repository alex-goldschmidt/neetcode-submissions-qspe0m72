class Solution {
    /**
     * @param {number[]} temps
     * @return {number[]}
     */
    dailyTemperatures(temps: number[]): number[] {
        let res = new Array(temps.length).fill(0);
        let stack = [];
        for (let i = 0; i < temps.length; i++) {
            let curr = temps[i];
            while (stack.length > 0 && curr > temps[stack[stack.length - 1]]) {
                let previousHotterIndex = stack.pop();
                res[previousHotterIndex] = i - previousHotterIndex;
            }
            stack.push(i);
        }
        return res;
    }
}
