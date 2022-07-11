/**
 * JS built-in sort
 */

let strings = ["Matsu", "Chen", "Cool", "Data Structure"];

strings.sort();

console.log(strings);

let nums = [2, 41, 1, 394, 532];

nums.sort((num1, num2) => num1 - num2);

console.log(nums);