import Header from "@/pages/header";
import React, {useEffect, useState} from "react";
import '../app/globals.css'
import {radixSort} from "@/algos/radix";

export default function Radix() {
    let radixArray: number[] = [];
    let randomArray: number[] = [];
    const [text, setText] = useState([]);
    const [random, setRandom] = useState(randomArray);
    const [radix, setRadix] = useState(radixArray);

    let handleSubmit = event => {
        event.preventDefault();
        // other body
        setText(event.target[0].value);
    }

    let randomArrayGenerator = length => {
        return Array.from({length: length}, () => Math.floor((Math.random() * 1000) + 1));
    }

    useEffect(() => {
        // create random array
        setRandom(randomArrayGenerator(text));
    }, [text]);

    useEffect(() => {
        // radix sort
        setRadix(radixSort(random));
    }, [random]);


    return (
        <React.Fragment>
            <Header />
            <h1>How Radix Search Works</h1>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
            <br />
            <form onSubmit={handleSubmit}>
            <label htmlFor="quantity">Quantity (between 1 and 100):</label>
            <input type="number" id="quantity" name="quantity" min="1" max="100"/>
                <button type="submit">Submit</button>
            </form>
            <h1>Random Array</h1>
            <ul>
                {random.map(random => (
                    <li key={random}>{random}</li>
                ))}
            </ul>
            <h1>Radix sorted Array</h1>
            <ul>
                {radix?.map(r => (
                    <li key={r}>{r}</li>
                ))}
            </ul>
        </React.Fragment>
    )
}
