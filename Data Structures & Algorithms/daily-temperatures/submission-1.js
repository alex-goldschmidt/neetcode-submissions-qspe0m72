class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = new Array(temperatures.length).fill(0);
        let stack = [];
        for (let i = 0; i < temperatures.length; i++) {
            let curr = temperatures[i];
            while (stack.length > 0 && curr > temperatures[stack[stack.length-1]]) {
                let previousHotterIndex = stack.pop();
                result[previousHotterIndex] = i - previousHotterIndex;
            }

            stack.push(i);
        }

        return result;
    }
}
