import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function UpdateEmploye() {
  const id = useParams().id;
  const history=useNavigate()
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
      // alert("Employee Data Updated Successfully")
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
     
    }).catch((err)=>{console.log(err);})
  }

  return (
    
    <div className=" bg-dark vh-100 d-flex justify-content-center">
        
      <form onSubmit={handelSubmit} className="container-lg bg-secondary py-5 w-50 m-5 rounded px-5">
        <div className="form-group">
          <label htmlFor="name">Enter Id:</label>
          <input
            type="text"
            className="form-control my-2"
            id="name" disabled
            value={datas.id}
           
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Enter Name:</label>
          <input
            type="text"
            className="form-control my-2"
            id="name"
            value={datas.name}
            onChange={(e) => setData({ ...datas, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Enter Email:</label>
          <input
            type="text"
            className ="form-control my-2"
            id="name"
            value={datas.mail}
            onChange={(e) => setData({ ...datas, mail: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"> Phone No:</label>
          <input
            type="text"
            className="form-control my-2"
            id="email"
            value={datas.phone}
            onChange={(e) => setData({ ...datas, phone: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Role:</label>
          <input
            type="text"
            className="form-control my-2"
            id="email"
            value={datas.role}
            onChange={(e) => setData({ ...datas, role: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary my-4">
          Update
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default UpdateEmploye;
