import Header from "@/pages/header";
import React, {useEffect, useState} from "react";
import '../app/globals.css'
import {adjacencyList, bfs, dfs} from '@/algos/graph'
export default function Graph() {
    const [selectedClient,setSelectedClient] = useState("PHX");
    function handleSelectChange(event) {
        setSelectedClient(event.target.value);
    }

    useEffect(() => {
        //let bfsVisited = bfs(selectedClient);
        const dfsVisited = dfs(selectedClient);
        //console.log('b', bfsVisited);
        console.log('d', dfsVisited);
    });

    const adjacenyListDisplay: any[] = [];
    adjacencyList.forEach((c, key) => adjacenyListDisplay.push({city: key, edges: c.join(', ')}));

    return <React.Fragment>
        <Header />
        <h1>How Graph Search Works</h1>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
        <br />
        <div>Adjacency list</div>
        {adjacenyListDisplay.map(x =>
            <ul key={x.id}>
                <li key={x.id}>{x.city}</li>
                <li>{x.edges}</li>
            </ul>)}


            <label>
                Pick your starting point:
                <select value={selectedClient} onChange={handleSelectChange}>
                {adjacenyListDisplay.map(x =>
                    <option value={x.city}>{x.city}</option>
               )}
                </select>
            </label>

        <div>pick: {selectedClient}</div>
    </React.Fragment>
}

