class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const el = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];

            if (el <= parent) break;

            this.values[parentIdx] = el;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(33);
heap.insert(99);
heap.insert(9);
heap.insert(36);
heap.insert(21);
console.log(heap.values);
