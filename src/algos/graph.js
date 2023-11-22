// set up data struct

const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];


// The graph
const adjacencyList = new Map();

// Add node
function addNode(airport) {
    adjacencyList.set(airport, []);
}

// Add edge, undirected
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

// Create the Graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route))

/// breath-first

function bfs(start) {

    const visited = new Set();

    const queue = [start];

    while (queue.length > 0) {

        const airport = queue.shift(); // mutates the queue
        const destinations = adjacencyList.get(airport);

        if (destinations) {
            for (const destination of destinations) {

                if (destination === 'BKK') {
                    console.log(`BFS found Bangkok!`)
                    return Array.from(visited);
                }

                if (!visited.has(destination)) {
                    visited.add(destination);
                    queue.push(destination);
                }

            }
        }


    }

}

// depth first
function dfs(start, visited = new Set()) {
    let thing;
    visited.add(start);
    const destinations = adjacencyList.get(start);
    if (destinations) {
        if (!thing) {
            for (const destination of destinations) {
                console.log(destination)
                if (destination === 'BKK') {
                    console.log(`DFS found Bangkok`)
                    thing = [...visited];
                    console.log(thing)
                    return thing;
                }

                console.log('how', destination)
                if (!visited.has(destination)) {
                    dfs(destination, visited);
                }

            }
        }

    }
}


export { adjacencyList, bfs, dfs};
