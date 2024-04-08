import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateEmploy() {
    const history = useNavigate();
    const [input, setInput] = useState({
      id:"",
      name: "",
      mail: "",
      phone: "",
      role: "",
    });


  function submitHandler(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      toast.warning('Please fill the required field', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      e.stopPropagation();
    } else {
      axios
      .post("http://localhost:8000/employe", input)
      .then((res) => {
        toast.success('Employee Data Updated successfully', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          history('/');
        },2000)
        
      })
      .catch((err) => {
        console.log(err);
      });
    }    
  }
  return (
    <div className=" bg-dark vh-100 d-flex justify-content-center">
      <Form onSubmit={submitHandler} className="container-lg bg-secondary py-5 px-5 w-50 m-5 rounded border border-info" noValidate>
      <div className ="form-group">
          <label htmlFor="name">Enter Id:</label>
          <input
            type="text"
            className ="form-control my-2"
            id="name"
            placeholder="Enter your Id"
            onChange={(e) => setInput({ ...input, id: e.target.value })}
            required
          />
          <div className="invalid-feedback">Please enter the Employee Id</div>
        </div>
        <div className ="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className ="form-control my-2"
            id="name"
            placeholder="Enter your name"
            onChange={(e) => setInput({ ...input, name: e.target.value })}
            required
          />
          <div className="invalid-feedback">Please enter the name.</div>
        </div>
        <div className ="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="text"
            className ="form-control my-2"
            id="email"
            placeholder="Enter email"
            onChange={(e) => setInput({ ...input, mail: e.target.value })}
            required
          />
          <div className="invalid-feedback">Please enter the name.</div>
        </div>
        <div className ="form-group">
          <label htmlFor="email">Phone No:</label>
          <input
            type="text"
            className ="form-control my-2"
            id="email"
            placeholder="Enter phone No"
            onChange={(e) => setInput({ ...input, phone: e.target.value })}
            required
          />
          <div className="invalid-feedback">Please enter the name.</div>
        </div>
        <div className ="form-group">
          <label htmlFor="email">Role:</label>
          <input
            type="text"
            className ="form-control my-2"
            id="email"
            placeholder="Enter Role"
            onChange={(e) => setInput({ ...input, role: e.target.value })}
          />
        </div>
        <button type="submit" className ="btn btn-primary my-4">
          Submit
        </button>
      </Form>
      <ToastContainer />

    </div>
  );
}

export default CreateEmploy;
