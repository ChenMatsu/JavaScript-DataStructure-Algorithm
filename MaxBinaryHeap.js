class MaxBinaryHeap {
    constructor() {
        // this.values = [41, 39, 33, 18, 27, 12];
        this.values = [];
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
                if (leftChild > el) {
                    swap = leftIdx;
                }
            }

            if (rightIdx < len) {
                rightChild = this.values[rightIdx];
                // Checking if left is swap or not
                if ((!swap && rightChild > el) || (swap && rightChild > leftChild)) {
                    swap = rightIdx;
                }
            }

            if (!swap) break;

            this.values[idx] = this.values[swap];
            this.values[swap] = el;

            idx = swap;
        }
    }

    extract() {
        const max = this.values[0];
        const end = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return max;
    }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(39);
heap.insert(41);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(33);
console.log(heap.values);
heap.extract();
heap.extract();
console.log(heap.values);
heap.extract();
heap.extract();
heap.extract();
console.log(heap.values);
heap.extract();
heap.extract();
heap.extract();
console.log(heap.values);
