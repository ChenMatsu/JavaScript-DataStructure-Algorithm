function collectOddValues(arr) {
    const result = [];

    const helperHandler = (arr) => {
        if (arr.length === 0) return;
        if (arr[0] % 2 !== 0) result.push(arr[0]);

        helperHandler(arr.slice(1));
    };

    helperHandler(arr);
    return result;
}
console.log(collectOddValues([1, 2, 3, 4]));
console.log(collectOddValues([5, 6, 7, 8]));
