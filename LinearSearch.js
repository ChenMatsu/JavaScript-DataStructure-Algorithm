/**
 * @desc O(n)
 * @param {*} arr 
 * @param {*} item 
 * @returns 
 */
function search(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) return i;
    }
    return -1;
}

console.log(search([2, 5, 6, 3, 4, 59, 21], 59));
