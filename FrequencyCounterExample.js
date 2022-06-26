/**
 * @desc O(n^2)
 * @param {*} arr1
 * @param {*} arr2
 * @returns
 */
function sameNaive(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        let correctIdx = arr2.indexOf(arr1[i] ** 2);
        if (correctIdx === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIdx, 1);
    }
    return true;
}

/**
 * @desc O(n)
 * @param {*} arr1
 * @param {*} arr2
 * @returns
 */
function sameRefactor(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let freqCounter1 = {};
    let freqCounter2 = {};

    for (let val of arr1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1;
    }

    for (let key in freqCounter1) {
        if (!(key ** 2 in freqCounter2)) return false;

        console.log(freqCounter2[key ** 2], freqCounter1[key]);
        if (freqCounter2[key ** 2] !== freqCounter1[key]) return false;
    }
    console.log(freqCounter1);
    console.log(freqCounter2);

    return true;
}

// console.log(sameNaive([1, 2, 3, 2], [9, 1, 4, 4]));
console.log(sameRefactor([1, 2, 3, 2], [9, 1, 4, 4]));
