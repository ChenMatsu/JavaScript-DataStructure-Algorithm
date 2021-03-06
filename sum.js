/**
 * Question:
 *   Suppose a function that calculates the sum of all numbers from 1 up to(and including) some number n
 */

// Matsu: Import for using performance function
const { performance } = require('perf_hooks');
// Matsu: Import for using user input
const prompt = require('prompt');

// Method-1 => O(5n+2) === O(n)
// Counting Operations:  
//  => i > 1(initialize) + 1 Assignement + n comparions + n * 1 Addition and Assignment 
//  => total > n * 1 Addition and 1(initialize) + n * 1 Assignment
//  => n operations Regarding of the Size of N
const addUpToMethodOne = (n) => {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }

  return total;
};

// Method-2 => O(1)
// Counting Operations: 1 Multiplication + 1 Addition + 1 Division 
//  => 3 Simple Operations Regarding of the Size of N
const addUpToMethodTwo = (n) => {
  return (n * (n + 1)) / 2;
};

console.log('Calculate to some number n: ');
prompt.start();
prompt.get(['number'], (err, result) => {
  let m1t1 = performance.now();
  addUpToMethodOne(result.number);
  let m1t2 = performance.now();
  console.log(`Method One Takes: ${(m1t2 - m1t1) / 1000} seconds `);

  let m2t1 = performance.now();
  addUpToMethodTwo(result.number);
  let m2t2 = performance.now();
  console.log(`Method Two Takes: ${(m2t2 - m2t1) / 1000} seconds `);
});
