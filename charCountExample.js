function charCountForLoop(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            obj[char]++;
        } else {
            obj[char] = 1;
        }
    }
    return obj;
}

/**
 * @desc using regex
 * @param str
 * @returns
 */
function charCountForOfLoopRegex(str) {
    let obj = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function charCountForOfLoopNonRegex(str) {
    let obj = {};
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(str) {
    let code = str.charCodeAt(0);
    if (!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)) {
        return false;
    }
    return true;
}

// console.log(charCountForLoop("Hello World"));
// console.log(charCountForOfLoopRegex("Hello World"));
console.log(charCountForOfLoopNonRegex("Hello World"));
