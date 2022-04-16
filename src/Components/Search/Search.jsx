import React, { useState } from "react";
import axios from "axios";

import { Button } from "react-bootstrap";

import './Search.css';
import { getAuthHeader } from "../../utils/utils";
import { useNavigate } from "react-router-dom";

const BOOKS_API = 'https://main.dbw4tddy1dxn9.amplifyapp.com/api/search';

export default function Search() {
    const [search, setSearch] = useState("");
    const [booksList, setList] = useState([]);
    const navigate = useNavigate();

    function searchBook() {
        axios.get(BOOKS_API, {
            params: {
                search: search,
            },
            headers: getAuthHeader() 
        })
            .then(res => {
                setList(res.data);
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