/**
 * @key Array has to be SORTED
 */

/**
 * @Time Time Complexity O(n^2) Space Complexity O(1)
 * @param {*} arr
 * @returns
 */
function sumZeroNaive(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
        }
    }
}

console.log(sumZeroNaive([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZeroNaive([-2, 0, 1, 3]));
console.log(sumZeroNaive([1, 2, 3]));

/**
 * @Time Time Complexity O(n) Space Complexity O(1)
 * @param {*} arr
 * @returns
 */
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) return [arr[left], arr[right]];
        sum > 0 ? right-- : left++;
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));

