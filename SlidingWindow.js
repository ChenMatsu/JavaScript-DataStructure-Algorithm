/**
 * @desc O(n^2)
 * @param {*} arr 
 * @param {*} num 
 * @returns 
 */
function maxSubarraySumNaive(arr, num) {
    if (num > arr.length) return null;

    let max = -Infinity;

    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) max = temp;
    }
    return max;
}

console.log(maxSubarraySumNaive([], 3));
console.log(maxSubarraySumNaive([1, 2, 3, 5], 3));
console.log(maxSubarraySumNaive([3, 5, 9, 5, 11, 22, 3, 1], 3));

/**
 * @desc O(n)
 * @param {*} arr 
 * @param {*} num 
 * @returns 
 */
function maxSubarraySumSlidingWindow(arr, num) {
    if (arr.length < num) return null;
    let maxSum = 0;
    let tempSum = 0;
    // First sum
    for (let i = 0; i < num; i++) maxSum += arr[i];

    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySumSlidingWindow([], 3));
console.log(maxSubarraySumSlidingWindow([1, 2, 3, 5], 3));
console.log(maxSubarraySumSlidingWindow([3, 5, 9, 5, 11, 22, 3, 1], 3));
