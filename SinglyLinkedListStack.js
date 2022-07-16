class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }

    /**
     * @desc O(1)
     * @param {} value 
     * @returns 
     */
    push(value) {
        const newNode = new Node(value);
        if (!this.size) {
            this.first = newNode;
            this.last = this.first;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    /**
     * @desc O(1)
     * @returns 
     */
    pop() {
        if (!this.size) return null;

        const removedNode = this.first;
        switch (this.size) {
            case 1:
                this.last = null;
                break;
            default:
        }
        this.first = this.first.next;
        this.size--;
        return removedNode.value;
    }
}

const stack = new Stack();
stack.push("First");
stack.push("Second");
stack.push("Third");
console.log(stack.pop(), stack.pop(), stack.pop(), stack.pop());