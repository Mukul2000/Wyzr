import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAuthHeader } from "../../utils/utils";

const VOLUME_API = "https://main.dbw4tddy1dxn9.amplifyapp.com/api/book/"

export default function Detail(props) {
    const [book, setBook] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        axios.get(VOLUME_API+id, {
            headers: getAuthHeader()
        })
        .then(res => {
            setBook(res.data);
        })
        .catch(e => console.log(e));
    }, []);
    if( book )
        return <div>

            <img src={book.volumeInfo.imageLinks.thumbnail} height={500} width={400} />    
            <br/>
            <br/>
            <h2> {book.volumeInfo.title} </h2>
            {book.volumeInfo.authors.map((author_name, ind) => {
                return <h3 key={ind}> {author_name} </h3>
            })}

            {book.volumeInfo.categories !== undefined && book.volumeInfo.categories.map(genre => <h3> {genre} </h3>)}
            <h5> Page count : {book.volumeInfo.pageCount} </h5>
            <h5> Publisher : {book.volumeInfo.publisher} </h5>
            <h5> Published date: {book.volumeInfo.publishedDate} </h5>
            <p> Description : {book.volumeInfo.description} </p>
        </div>
    else {
        return <h2> Loading your book  </h2>
    }
}