function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(--num);
}

console.log(sumRange(5));
