import React, { useState, useEffect } from 'react'
import axios from 'axios';
const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getAllUserData = async () => {
      const res = await axios.get("http://localhost:8000/api/v1/users");
      setUsers(res.data);
    }
    getAllUserData();
  }, [])
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div style={{ backgroundColor: "gray" }}>
              <h1 className="text-white text-center mt-2"> MERN CURD </h1>
            </div>
          </div>
          <div className="col-md-6">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputPassword1" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Age</label>
                <input type="number" class="form-control" id="exampleInputPassword1" />
              </div>

              <button type="submit" class="btn btn-primary">Submit</button>
            </form>

          </div>
          <div className="col-md-6">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Age</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  users && users.map((user)=>{
                    return (
                      <tr key={user._id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.age}</td>
                      <td><div className="btn btn-primary">Edit</div></td>
                      <td><div className="btn btn-danger">Delete</div></td>
                    </tr>
                    )
                  })
                }
               

              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home