function binarySearch(arr, value) {
    let leftPointer = 0;
    let rightPointer = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[leftPointer] < value) {
            leftPointer++;
        } else if (arr[rightPointer] > value) {
            rightPointer--;
        } else if (arr[leftPointer] === value) {
            return leftPointer;
        } else if (arr[rightPointer] === value) {
            return rightPointer;
        }
    }

    return -1;
}

console.log(binarySearch([1, 2, 3], 1));
console.log(binarySearch([1, 2, 3], 3));

function binarySearchSolution(arr, value) {
    let leftPointer = 0;
    let rightPointer = arr.length - 1;
    let middlePointer = Math.floor((leftPointer + rightPointer) / 2);

    while (arr[middlePointer] !== value && leftPointer <= rightPointer) {
        if (value < arr[middlePointer]) {
            rightPointer = middlePointer - 1;
        } else {
            leftPointer = middlePointer + 1;
        }
        middlePointer = Math.floor((leftPointer + rightPointer) / 2);
    }

    return arr[middlePointer] === value ? middlePointer : -1;
}

console.log(binarySearchSolution([1, 2, 3], 1));
console.log(binarySearchSolution([1, 2, 3], 3));
