/**
 * ===
 * Write a function which takes in a string and returns counts of each character in the string
 */

function charCount(str) {
  // do sothing
  // return an object...
}

function charCountReal(str) {
  // make object to return at end
  let result = {};

  // loop string for each charcter...
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // let char = str[i].toLowerCase();
    // if the char is a number/letter AND key in obj, add one to count
    if (result[char] > 0) {
      result[char]++;
      // if the char is a number/letter AND not in obj, add it and set value to 1
    } else {
      result[char] = 1;
    }
  }
  // if the char is something else (do nothing)
  // return object at end
  return result;
}

console.log(charCountReal("aaaa")); // { a: 4}
console.log(charCountReal("hello  ")); // {h:1, e:1, l:2, o:1}
// console.log(charCountReal()); // Empty?
console.log(charCountReal("")); // Empty?
// console.log(charCountReal(1234)); // Invalid ?
