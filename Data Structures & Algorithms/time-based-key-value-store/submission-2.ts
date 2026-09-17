type NumberThenStringArray = [number, string][]

class TimeMap {
    keyStore: Map<string, NumberThenStringArray>
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        if (!this.keyStore.get(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([timestamp, value])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        let values = this.keyStore.get(key) || [];
        let result = this.binarySearch(values, timestamp);
        return result;
    }

    binarySearch(values: NumberThenStringArray, timestamp: number): string {
        let result = "";
        let left = 0;
        let right = values.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            let currentTimestamp = values[mid][0];
            let currentStr = values[mid][1];
            if (currentTimestamp <= timestamp) {
                result = currentStr;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }
}
