/**
 * @desc Plain Old Recursion
 * @time O(2^N) => Really worse
 */
const fib = (n) => (n <= 2 ? 1 : fib(n - 1) + fib(n - 2));
// console.log(fib(45));

/**
 * @desc Memoization as cached
 * @time O(N)
 */
const fibMemoized = (n, memo = [undefined, 1, 1]) => {
    if (memo[n]) return memo[n];
    if (n <= 2) return 1;

    let result = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = result;
    return result;
};
// console.log(fibMemoized(45));

/**
 * @desc Tabulation
 * @direction Bottom-Up
 * @Time O(N)
 * @Space O(N)
 */
const fibTabulated = (n) => {
    if (n <= 2) return 1;
    let fibTabulation = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        fibTabulation[i] = fibTabulation[i - 1] + fibTabulation[i - 2];
    }
    return fibTabulation[n];
};

console.log(fibTabulated(45));
