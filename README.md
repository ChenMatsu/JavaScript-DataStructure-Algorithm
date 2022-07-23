# Dijkstra's Algorithm
> Find shortest path (optimization of problems)

```
function accept start and end vertex
create an object and set each key to be every vertex in the adjacency list with a value of infinity, 
    except for the starting vertex which should have a value 0
Add each vertex with a priority of infinity of 0 because that' where it begins
create an object called previous and set each key to be every vertex in the adjacency list with null
    looping if queue length > 0
        dequeue from previous queue
        if vertex === end done
        else loop adjacency list at that vertex 
            if distance < stored_distance   
                update distance 
                update previous to contain that vertex
                enqueue the vertex with total distance from start node 
```
