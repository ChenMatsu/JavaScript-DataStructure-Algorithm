function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    let strObj1 = {};
    let strObj2 = {};
    for (let i = 0; i < str1.length; i++) {
        str1[i] in strObj1 ? strObj1[str1[i]]++ : (strObj1[str1[i]] = 1);
    }

    for (let i = 0; i < str1.length; i++) {
        str2[i] in strObj2 ? strObj2[str2[i]]++ : (strObj2[str2[i]] = 1);
    }

    for (let char in strObj1) {
        if (strObj1[char] !== strObj2[char]) return false;
    }
    return true;
}

console.log(validAnagram("test", "stet"));
