function swap(arr, idx1, idx2, noSwaps) {
    if (arr[idx1] > arr[idx2]) {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
        noSwaps = false;
    }
}

const swapShort = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

/**
 * @desc Naive solution
 * @param {*} arr
 * @returns
 */
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            // console.log(arr, arr[j], arr[j + 1]);
            swap(arr, j, j + 1);
        }
    }

    return arr;
};

console.log(bubbleSort([5, 1, 2, 8, 9, 6]));

/**
 * @desc Optimized solution
 */
const bubbleSortOptimized = (arr) => {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            // console.log(arr, arr[j], arr[j + 1]);
            swap(arr, j, j + 1, noSwaps);
        }
        if (noSwaps) break;
    }

    return arr;
};

console.log(bubbleSortOptimized([5, 1, 2, 8, 9, 6]));
