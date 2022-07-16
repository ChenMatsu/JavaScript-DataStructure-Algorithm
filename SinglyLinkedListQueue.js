class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

class Queue {
    constructor() {
        this.size = 0;
        this.fisrt = null;
        this.last = null;
    }

    /**
     * @desc O(1)
     * @param {*} value
     * @returns
     */
    enqueue(value) {
        const newNode = new Node(value);
        if (!this.size) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    /**
     * @desc O(1)
     * @returns 
     */
    dequeue() {
        if (!this.size) return null;
        const removedNode = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return removedNode;
    }
}

const queue = new Queue();
queue.enqueue("First");
queue.enqueue("Second");
queue.enqueue("Third");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
