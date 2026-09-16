class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 1;
        let right = Math.max(...piles);
        let minEatingSpeed = right;

        while (left <= right) {
            let currentSpeed = Math.floor((left + right) / 2);
            let totalTime = 0;
            for (let pile of piles) {
                let hoursForPile = Math.ceil(pile / currentSpeed);
                totalTime += hoursForPile;
            }

            if (totalTime <= h) {
                minEatingSpeed = currentSpeed;
                right = minEatingSpeed - 1;
            } else {
                left = currentSpeed + 1;
            }
        }

        return minEatingSpeed;
    }
}
