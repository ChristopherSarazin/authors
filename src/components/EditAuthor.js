import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios'
import { useHistory } from "react-router-dom";


const EditAuthor = () => {
    const { id } = useParams();
    const history = useHistory();


    const [authorInfo, setAuthorInfo] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log("response-->", res)
                setAuthorInfo(res.data.results)
            })
            .catch(err => console.log("error ", err))
    }, [])


    const changeHandler = (e) => {
        console.log(e.target.name, e.target.value)
        setAuthorInfo({
            ...authorInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, authorInfo)
            .then(res => {
                console.log("response afer put request", res)
                if(res.data.err){
                } else {
                history.push("/api/authors")};
            })
            .catch(err => console.log("error, ", err))
    }


    return (
        <div>
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="">First Name:</label>
                <input onChange = {changeHandler} type="text" name="firstName" id="" className="form-control" value={authorInfo.firstName} />
            </div>
            <div className="form-group">
                <label htmlFor="">Last Name:</label>
                <input onChange = {changeHandler} type="text" name="lastName" id="" className="form-control" value={authorInfo.lastName} />
            </div>
            <input className= "btn btn-primary"type="submit" value="Update Author" />
        </form>
        </div>
    );
};


export default EditAuthor;