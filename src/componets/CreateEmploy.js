import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

    axios
      .post("http://localhost:8000/employe", input)
      .then((res) => {
        alert("Employe Data Added Successfully");
        history("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className=" bg-dark vh-100 d-flex justify-content-center">
      <form onSubmit={submitHandler} className="container-lg bg-secondary py-5 px-5 w-50 m-5 rounded border border-info">
      <div class="form-group">
          <label for="name">Enter Id:</label>
          <input
            type="text"
            class="form-control my-2"
            id="name"
            placeholder="Enter your Id"
            onChange={(e) => setInput({ ...input, id: e.target.value })}
          />
        </div>
        <div class="form-group">
          <label for="name">Name:</label>
          <input
            type="text"
            class="form-control my-2"
            id="name"
            placeholder="Enter your name"
            onChange={(e) => setInput({ ...input, name: e.target.value })}
          />
        </div>
        <div class="form-group">
          <label for="email">Email :</label>
          <input
            type="text"
            class="form-control my-2"
            id="email"
            placeholder="Enter email"
            onChange={(e) => setInput({ ...input, mail: e.target.value })}
          />
        </div>
        <div class="form-group">
          <label for="email">Phone No:</label>
          <input
            type="text"
            class="form-control my-2"
            id="email"
            placeholder="Enter phone No"
            onChange={(e) => setInput({ ...input, phone: e.target.value })}
          />
        </div>
        <div class="form-group">
          <label for="email">Role:</label>
          <input
            type="text"
            class="form-control my-2"
            id="email"
            placeholder="Enter Role"
            onChange={(e) => setInput({ ...input, role: e.target.value })}
          />
        </div>
        <button type="submit" class="btn btn-primary my-4">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateEmploy;
