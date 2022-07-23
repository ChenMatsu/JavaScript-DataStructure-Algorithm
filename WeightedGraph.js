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
}

/**
 * <!-- Unweighted --!>
 * {
 *   "A": ["B", "C"]
 * }
 *
 *
 * <!-- weighted --!>
 * {
 *   "A": { node: "B", weight: 10}
 * }
 */
