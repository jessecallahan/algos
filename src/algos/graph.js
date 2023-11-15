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
                    return visited;
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
    console.log('start', start);
    visited.add(start);
    console.log('visited', visited);
    const destinations = adjacencyList.get(start);
    console.log('destinations', destinations);
    if (destinations) {
        for (const destination of destinations) {

            if (destination === 'BKK') {
                console.log('visited1', visited);
                console.log(`DFS found Bangkok`)
                return visited;
            }

            if (!visited.has(destination)) {
                dfs(destination, visited);
            }

        }
    }

}


export { adjacencyList, bfs, dfs};
