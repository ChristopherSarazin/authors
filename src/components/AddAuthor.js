import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";



const AddAuthor = () =>{

    const history = useHistory();

    let [formInfo, setFormInfo] = useState({
        name: ""
    })

    let [validationErrors, setValadationError] = useState({})

    const changeHandler = (e)=>{
        console.log(e.target.name, e.target.value)
        setFormInfo({ 
            ...formInfo,
            [e.target.name]:e.target.value
            })
    }



    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("submitted with this info-->", formInfo)
        axios.post("http://localhost:8000/api/authors", formInfo)
            .then(res=>{
                console.log("response after submitting post request-->", res)
                if(res.data.err){
                    setValadationError(res.data.err.errors)
                } else {
                history.push("/api/authors")};
            })
            .catch(err=>console.log("error-->", err))
    }

    return (
        <div>
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="">First Name:</label>
                <input onChange = {changeHandler} type="text" name="firstName" id="" className="form-control" />
                <p className="text-danger">{validationErrors.firstName? validationErrors.firstName.message:""}</p>
            </div>
            <div className="form-group">
                <label htmlFor="">Last Name:</label>
                <input onChange = {changeHandler} type="text" name="lastName" id="" className="form-control" />
                <p className="text-danger">{validationErrors.lastName? validationErrors.lastName.message:""}</p>
            </div>
            <input className= "btn btn-primary" type="submit" value="Add Author" />
        </form>
        </div>
    )

}

export default AddAuthor;