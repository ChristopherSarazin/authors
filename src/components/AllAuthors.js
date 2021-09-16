import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


const AllAuthors = () => {

    const [allAuthors, setAllAuthors] = useState([]);

    const [deleterClicked, setDeleterClicked]=useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log("res is this-->", res)
                setAllAuthors(res.data.results)
            })
            .catch(err => console.log("Error-->", err))
    }, [deleterClicked])


    const deleter = (e,authorId) => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then(res=>{
                console.log("who you deleted-->",authorId)
                setDeleterClicked(!deleterClicked)
            })
            .catch(err=>console.log("error",err))
    }


    return (
        <div>
            <h3>All Authors</h3>
            <Link to={'/api/authors/new'}>Create New</Link>
            {allAuthors.map((author, idx) => {
                return <div key={idx} className="card">
                    <div className="card-body">
                        <h4 className="card-title">{author.firstName}  { author.lastName}
                        <p><Link className="btn btn-danger" to={`/api/authors/${author._id}`}>edit</Link>||
                        <button onClick = {(e)=>deleter(e,author._id)} className="btn btn-danger">Delete</button></p></h4>
                    </div>
                </div>
            })}
        </div>
    );
};

export default AllAuthors;