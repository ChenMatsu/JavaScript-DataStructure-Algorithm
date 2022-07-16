const stack = [];

/**
 * @desc Push and pop creates a stack
 */
stack.push("google");
stack.push("instagram");
stack.push("youtube");
stack.pop();
stack.pop();
stack.pop();

/**
 * @desc This requires re-indexing in the whole array with O(N)
 */
stack.unshift("amazon");
stack.unshift("facebook");
stack.shift();
stack.shift();