const queue = [];

/**
 * @desc Push / Shift
 */
queue.push("First")
queue.push("Second");
queue.push("Third");
queue.shift();
queue.shift();
queue.shift();

/**
 * @desc Pop / Unshift
 */
queue.unshift("First");
queue.unshift("Seoncd");
queue.unshift("Third");
queue.pop();
queue.pop();
queue.pop();