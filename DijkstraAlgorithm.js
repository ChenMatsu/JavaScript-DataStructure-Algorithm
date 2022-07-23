class SimplePriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        this.values.push({ value, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }

    Dijkstra(start, end) {
        const queue = new SimplePriorityQueue();
        const distances = {};
        const previous = {};
        const path = [];
        let smallest;
        /**
         * @desc initial state
         */
        for (let vertex in this.adjacencyList) {
            vertex === start
                ? ((distances[vertex] = 0), queue.enqueue(vertex, 0))
                : ((distances[vertex] = Infinity), queue.enqueue(vertex, Infinity));
            previous[vertex] = null;
        }

        /**
         * @desc looping and dequeue
         */
        while (queue.values.length) {
            smallest = queue.dequeue().value;
            // Done
            if (smallest === end) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    // Find neighbor node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    // Calculate distances
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
                        // Updating smallest
                        distances[nextNeighbor] = candidate;
                        // Updating previous
                        previous[nextNeighbor] = smallest;
                        // Enqueue priority queue
                        queue.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
console.log(graph.Dijkstra("A", "E"));
// console.group(JSON.stringify(graph, null, 2));
