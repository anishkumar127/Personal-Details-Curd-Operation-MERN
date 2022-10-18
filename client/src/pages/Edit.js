import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Edit = () => {
  const { id } = useParams();
  const [input, setInput] = useState({
    name: "",
    email: "",
    age: "",
  })
  useEffect(() => {
    const getAllUserData = async () => {
      const res = await axios.get(`http://localhost:8000/api/v1/users/single/${id}`);
      setInput(res.data);
    }
    getAllUserData();
  }, [id]);
  const handleEditSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div style={{ backgroundColor: "gray" }}>
              <h1 className="text-white text-center mt-2"> Update </h1>
            </div>
          </div>
          <div className="col-md-12">
            <form onSubmit={handleEditSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input name="name"
                  value={input.name}
                  onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Email</label>
                <input name="email"
                  value={input.email}
                  onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} type="email" class="form-control" id="exampleInputPassword1" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Age</label>
                <input name="age"
                  value={input.age}
                  onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} type="number" class="form-control" id="exampleInputPassword1" />
              </div>

              <button type="submit" class="btn btn-primary">Update</button>
            </form>

          </div>

        </div>
      </div>

    </>
  )
}

export default Edit;