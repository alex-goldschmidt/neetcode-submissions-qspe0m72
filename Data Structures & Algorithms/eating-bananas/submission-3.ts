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
            let currentEatingSpeed = Math.floor((left + right) / 2);
            let totalTime = 0;
            for (let pile of piles) {
                let timeToEatBananas = Math.ceil(pile / currentEatingSpeed);
                totalTime += timeToEatBananas;
            }
            if (totalTime <= h) {
                minEatingSpeed = currentEatingSpeed;
                right = minEatingSpeed - 1;
            } else {
                left = currentEatingSpeed + 1;
            }
        }
        return minEatingSpeed;
    }
}
