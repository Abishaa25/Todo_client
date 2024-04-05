import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const [record, setRecord] = useState([]);
  const [refresh,setrefresh]=useState(1)
  const history=useNavigate()
  useEffect(() => {
    axios.get("http://localhost:8000/employe").then((res) => {
      setRecord(res.data);
      console.log(res.data);
    });
  }, [refresh]);

  function deleteHandeler(id) {
    axios
      .delete("http://localhost:8000/employe/" + id)
      .then((res) => {
        alert("Record Deleted !")
        history('/')
        setrefresh(refresh+1)
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="vh-100 vw-100 bg-secondary bg-gradient p-5">
    <div className="container ">
      <h1>EMPLOYE LISTS</h1>
      <div>
        <Link to="./create">
          <button className="btn btn-primary w-5">Add</button>
        </Link>
      </div>
      <table class="table mt-2">
  <thead class="table table-dark">
          <tr>
            <th scope="col" >Id</th>
            <th scope="col" >Name</th>
            <th scope="col" >Email</th>
            <th scope="col" >Phone No</th>
            <th scope="col" >Role</th>
            <th scope="col" >Action</th>
          </tr>
        </thead> 
        <tbody className="thead-light">
          {record.map((data) => {
            return (
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.mail}</td>
                <td>{data.phone}</td>
                <td>{data.role}</td>
                <td className="d-flex gap-1">
                  <Link to={`/update/${data.id}`}>
                    <button className="btn btn-success"><i class="fa-regular fa-pen-to-square"></i>

</button>
                  </Link>
                  <button className="btn btn-danger" onClick={(e) => deleteHandeler(data.id)}>
                  <i class="fa-regular fa-trash-can"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default App;
