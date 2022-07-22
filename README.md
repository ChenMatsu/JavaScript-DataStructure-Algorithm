# Graph

> Nodes + Connections

## Use Cases

-   Social Networks
-   Location / Mapping
-   Routing Algorithm
-   Visual Hierarchy
-   File System Operations
-   More...

## Types of Graph

-   Terminology
    -   Vertex: A Node
    -   Edge: Connection between nodes
-   Graphs
    -   Undirected / directed Graph
    -   Unweighted / weighted Graph

## Store Graph

-   Adjacency Matrix
    -   Takes up more space (sparse matrix)
    -   Slower to iterate over all edges
-   Adjacency List
    -   Can be slower to look up specific edge

| Operation     | Adjacency List | Adjacency Matrix |
| ------------- | -------------- | ---------------- |
| Add Vertex    | O(1)           | O(V^2)           |
| Add Edge      | O(1)           | O(1)             |
| Remove Vertex | O(V + E)       | O(V^2)           |
| Remove Edge   | O(E)           | O(1)             |
| Add Query     | O(V + E)       | O(1)             |
| Storage       | O(V + E)       | O(V^2)           |
