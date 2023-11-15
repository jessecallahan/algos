import Header from "@/pages/header";
import React, {useEffect, useState} from "react";
import '../app/globals.css'

export default function Radix() {
    const [text, setText] = useState('');

    let handleSubmit = event => {
        event.preventDefault();
        // other body
        setText(event.target[0].value);
    }

    let randomArrayGenerator = length => {
        let randomArray = Array.from({length: length}, () => Math.floor((Math.random() * 1000) + 1));
        console.log(randomArray);
    }

    useEffect(() => {
        // create randomn array
        randomArrayGenerator(text);
        // radix sort
        console.log('text', text);
    });

    return (
        <React.Fragment>
            <Header />
            <form onSubmit={handleSubmit}>
            <label htmlFor="quantity">Quantity (between 1 and 100):</label>
            <input type="number" id="quantity" name="quantity" min="1" max="100"/>
                <button type="submit">Submit</button>
            </form>
            </React.Fragment>
    )
}
