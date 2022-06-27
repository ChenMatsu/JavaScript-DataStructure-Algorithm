function countUniqueValues(arr) {
    if (arr.length === 0) return 0;

    let i = 0;
    let j = 1;
    while (j < arr.length) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
        j++;
    }
    return ++i;

    // let i = 0;
    // for (let j = 1; j < arr.length; j++) {
    //     if (arr[i] !== arr[j]) {
    //         i++;
    //         arr[i] = arr[j];
    //     }
    // }
    // return ++i;
}

console.log(countUniqueValues([1, 2, 3, 4, 5, 5, 5, 6]));
console.log(countUniqueValues([-5, -4, -3, -2, -2, -1, 0, 2, 5]));
console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
