/**
 * @desc Undirected Graph using Adjacency List
 */
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        /**
         * @issue Without error-handling
         */
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        /**
         * @issue Without error-handling
         */
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((node) => node !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((node) => node !== vertex1);
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencyList[vertex];
    }

    DFSR(start) {
        const results = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return null;

            results.push(vertex);
            visited[vertex] = true;

            adjacencyList[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) return dfs(neighbor);
            });
        })(start);

        return results;
    }

    DFSI(start) {
        const stack = [start];
        const results = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            results.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }

        return results;
    }
}

const graph = new Graph();
// graph.addVertex("Tokyo");
// graph.addVertex("Kyoto");
// graph.addVertex("Taiwan");
// graph.addEdge("Tokyo", "Kyoto");
// graph.addEdge("Tokyo", "Taiwan");
// graph.addEdge("Kyoto", "Taiwan");
// graph.removeEdge("Tokyo", "Kyoto");
// graph.removeVertex("Tokyo");
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.DFSR("A"));
console.log(graph.DFSI("A"));

/**
 *          A
 *       /      \
 *      B        C
 *      \       /
 *       D --- E
 *        \   /
 *          F
 */
console.log(graph);
