function fac(num) {
    if (num === 1) {
        return 1;
    }
    return num * fac(--num);
}

console.log(fac(10));
