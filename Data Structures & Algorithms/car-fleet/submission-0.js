class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = position.map((p, i) => [p, speed[i]]);
        cars.sort((a, b) => b[0] - a[0]);
        let stack = [];
        for (let [p, s] of cars) {
            let timeToTarget = (target - p) / s;
            stack.push(timeToTarget);
            let fleetCount = stack.length;
            let last = stack[stack.length - 1]
            let secondToLast = stack[stack.length - 2]

            if (fleetCount >= 2 && last <= secondToLast) {
                stack.pop();
            }
        }
        return stack.length;
    }
}
