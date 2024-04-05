import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateEmploye() {
  const id = useParams().id;
  const history=useNavigate()
  console.log(id);
  const [datas, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/employe/" + id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handelSubmit(event) {
    event.preventDefault();
    axios.put("http://localhost:8000/employe/" + id, datas).then((res) => {
      alert("Employee Data Updated Successfully")
      history('/')
     
    }).catch((err)=>{console.log(err);})
  }

  return (
    
    <div className=" bg-dark vh-100 d-flex justify-content-center">
        
      <form onSubmit={handelSubmit} className="container-lg bg-secondary py-5 w-50 m-5 rounded px-5">
        <div class="form-group">
          <label for="name">Enter Id:</label>
          <input
            type="text"
            class="form-control my-2"
            id="name"
            value={datas.id}
           
          />
        </div>
        <div class="form-group">
          <label for="name">Enter Name:</label>
          <input
            type="text"
            class="form-control my-2"
            id="name"
            value={datas.name}
            onChange={(e) => setData({ ...datas, name: e.target.value })}
          />
        </div>
        <div class="form-group">
          <label for="name">Enter Email:</label>
          <input
            type="text"
            class="form-control my-2"
            id="name"
            value={datas.mail}
            onChange={(e) => setData({ ...datas, mail: e.target.value })}
          />
        </div>
        <div class="form-group">
          <label for="email"> Phone No:</label>
          <input
            type="text"
            class="form-control my-2"
            id="email"
            value={datas.phone}
            onChange={(e) => setData({ ...datas, phone: e.target.value })}
          />
        </div>
        <div class="form-group">
          <label for="email">Email Role:</label>
          <input
            type="text"
            class="form-control my-2"
            id="email"
            value={datas.role}
            onChange={(e) => setData({ ...datas, role: e.target.value })}
          />
        </div>
        <button type="submit" class="btn btn-primary my-4">
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateEmploye;
