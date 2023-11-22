import Header from "@/pages/header";
import React, {useEffect, useState} from "react";
import '../app/globals.css'
import {adjacencyList, bfs, dfs} from '@/algos/graph'
export default function Graph() {
    let dfsArray: string[] = [];
    let bfsArray: string[] = [];
    const [selectedClient,setSelectedClient] = useState("PHX");
    const [dfsPick, setDfs] = useState(dfsArray);
    const [bfsPick, setBfs] = useState(bfsArray);

    function handleSelectChange(event) {
        setSelectedClient(event.target.value);
    }
    // useEffect(() => {
    //     // @ts-ignore
    //     setBfs(bfs(selectedClient));
    // }, [selectedClient]);

    useEffect(() => {


        // @ts-ignore
        setDfs(dfs(selectedClient));

        console.log('i fire once');
    }, [selectedClient]);



    const adjacenyListDisplay: any[] = [];
    adjacencyList.forEach((c, key) => adjacenyListDisplay.push({city: key, edges: c.join(', ')}));
    console.log('dfs', dfsPick, selectedClient);
    // console.log('bfs', bfsPick, selectedClient);

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
        <div>bfs: {bfsPick}</div>
        <div>dfs: {dfsPick}</div>

    </React.Fragment>
}

