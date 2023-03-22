import React, { useState, useContext } from "react";
import { ThemeContext } from "./App";

export default function CounterHooks({ initialCount }) {
    const [count, setCount] = useState(initialCount);
    const style = useContext(ThemeContext);
    return (
        <div className="container">
            <button onClick={() => setCount(prevCount => prevCount -1)} type="button" className="btn btn-secondary">-</button>
            <span style={style}>{count}</span>
            <button onClick={() => setCount(prevCount => prevCount +1)}type="button" className="btn btn-primary">+</button>
        </div>
    );
}