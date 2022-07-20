class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        const newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const targetElement = this.values[index];

        while (index > 0) {
            let parentIdx = Math.floor((index - 1) / 2);
            let parent = this.values[parentIdx];

            if (targetElement.priority >= parent.priority) break;

            this.values[parentIdx] = targetElement;
            this.values[index] = parent;
            index = parentIdx;
        }
    }

    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return min;
    }

    sinkDown() {
        let idx = 0;
        const len = this.values.length;
        const el = this.values[0];

        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let leftChild, rightChild;

            let swap = null;
            // Checking not out of boundary
            if (leftIdx < len) {
                leftChild = this.values[leftIdx];
                if (leftChild.priority < el.priority) {
                    swap = leftIdx;
                }
            }

            if (rightIdx < len) {
                rightChild = this.values[rightIdx];
                // Checking if left is swap or not
                if (
                    (!swap && rightChild.priority < el.priority) ||
                    (swap && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightIdx;
                }
            }

            if (!swap) break;

            this.values[idx] = this.values[swap];
            this.values[swap] = el;

            idx = swap;
        }
    }
}

const queue = new PriorityQueue();
queue.enqueue("Gunshot", 1);
queue.enqueue("Fever", 3);
queue.enqueue("Headache", 2);
queue.enqueue("Drunk", 6);
console.log(queue);
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue);
