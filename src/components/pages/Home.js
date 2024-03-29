import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    loadUsers();
  },[]);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUsers(result.data)
    console.log(result);
  }

  const deleteUser = async (id)=>{
    await axios.delete(`http://localhost:3003/users/${id}`)
    loadUsers();
  }

  return (
    <div className='container'>
        <div className='py-4'>
            <h1>Home Page</h1>
            <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map((user,index)=>{
        return <tr key={index}>
          <th scope='row'>{index+1}</th>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>
            <Link className='btn btn-primary me-2' to={`/user/${user.id}`}>view</Link>
            <Link className='btn btn-outline-primary me-2' to={`/user/edit/${user.id}`} >Edit</Link>
            <Link className='btn btn-danger' onClick={()=>deleteUser(user.id)} >Delete</Link>
          </td>
        </tr>
      })
    }
  </tbody>
</table>
</div>
</div>
  )
}

export default Home