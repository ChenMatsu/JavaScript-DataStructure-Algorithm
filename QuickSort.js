function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

/**
 * @desc Quick Sort
 * @param {} arr
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right);

        // Left
        quickSort(arr, left, pivotIdx - 1);
        // Right
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
