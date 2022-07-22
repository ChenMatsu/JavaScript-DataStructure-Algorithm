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

## Traversal

-   Use cases
    -   Peer to peer networking
    -   Web crawler
    -   Finding "closest" matches
    -   Shortes Path
        -   GPS Navigation
        -   Solving Maze
        -   AI

## DFS Traversal

```
<!-- Recursive -->
DFS(vertex):
    if vertex is empty
        return
    add vertex to results list
    mark vertex as visited
    for each neighbor in vertex's neighbors:
        if neighbor is not visited:
            recursively call DFS on neighbor

<!-- Iterative -->
DFS(vertex):
    let S be a stack
    S.push(start)
    while S is not empty
        vetex = S.pop()
        if vertex is not labeled as discovered:
            visit vertex
            label vertex as discovered
            for each of vertex's neighbors, N do 
                S.push(N)
```
