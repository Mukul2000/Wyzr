import React, { useState } from "react";
import axios from "axios";

import { Button } from "react-bootstrap";

import './Search.css';
import { useNavigate } from "react-router-dom";

const BOOKS_API_KEY = "AIzaSyDgbqlUYLmDvVnYmHtRSzgekkuxwSGSDpo";
const BOOKS_API = 'https://www.googleapis.com/books/v1/volumes';

export default function Search() {
    const [search, setSearch] = useState("");
    const [booksList, setList] = useState([]);
    const navigate = useNavigate();

    function searchBook() {
        axios.get(BOOKS_API, {
            params: {
                q: search,
                key: BOOKS_API_KEY
            }
        })
            .then(res => {
                setList(res.data.items);
            })
            .catch(e => console.log(e));
    }

    return <div className="main-wrapper">
        <h3> Enter book to search for</h3>
        <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <br />
        <br />
        <Button onClick={searchBook}> Submit </Button>

        <div className="list">
            {booksList.map((item) => { 
                return <div key={item.id} className="item" onClick={() => navigate(`/book/${item.id}`)}> {item.volumeInfo.title} : {item.volumeInfo.authors} </div> 
            })}
        </div>
    </div>
}