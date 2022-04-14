import React, { useState } from "react";
import './Search.css';

export default function Search() {
    const [search, setSearch] = useState("");
    const [booksList, setList] = useState([]);

    return <div className="main-wrapper">
        <h3> Enter book to search for</h3>
        <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        /> 
        <br/>
        <br/>
        <button onClick={(e) => {}}> Submit </button>

        <div className="list">
            {booksList.map((item,ind) => <div key={ind} className="item"> list item </div>)}
        </div>
    </div>
}