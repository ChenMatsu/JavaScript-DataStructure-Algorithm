/**
 * @desc Uniformly Distributes Values & Deterministic
 * @desc Basic Hash Function
 */
function basicHash(key, arrayLength) {
    let total = 0;
    for (let char of key) {
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLength;
    }

    return total;
}

/**
 * @desc Improved a bit
 */
function optimizedHash(key, arrayLen) {
    let total = 0;
    let PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;

        total = (total * PRIME + value) % arrayLen;
    }

    return total;
}
console.log(optimizedHash("hello", 13));
console.log(optimizedHash("goodbye", 13));
console.log(optimizedHash("wolrd", 13));
console.log(optimizedHash("underground", 13));
