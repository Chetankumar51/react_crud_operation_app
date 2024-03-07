import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';

const EditUser = () => {
    let history = useHistory();
    const {id} = useParams();
    const [user,setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const { name, username, email, phone, website } = user;
    const onInputChange = (e)=>{
        setUser({...user,[e.target.name]: e.target.value})
        console.log(e.target.value);
    }


    useEffect(()=>{
        loadUser();
    },[])
    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user) 
        history.push("/")
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data)
    }

  return (
      <div className='container' >
          <div className='w-75 mx-auto shadow p-5' >
              <h2 className='text-center mb-4' >Edit A User</h2>

              <form onSubmit={e => onSubmit(e)} >

              <div className="form-group pb-2">
              <input type="text"
         className='form-control form-control-lg '
        placeholder='Enter your Name'
        name="name"
        value={name}
        onChange={(e)=> onInputChange(e)}
        />
    </div>

    <div className="form-group pb-2">
        <input type="text"
        className='form-control form-control-lg'
        placeholder='Enter your Username'
        name="username"
        value={username}
        onChange={(e)=> onInputChange(e)}

        />
    </div>

    <div className="form-group pb-2">
        <input type="text"
        className='form-control form-control-lg'
        placeholder='Enter your E-mail Address'
        name="email"
        value={email}
        onChange={(e)=> onInputChange(e)}

        />
    </div>

    <div className="form-group pb-2">
        <input type="text"
        className='form-control form-control-lg'
        placeholder='Enter your Phone Number'
        name="phone"
        value={phone}
        onChange={(e)=> onInputChange(e)}
        
        />
    </div>

    <div className="form-group pb-2">
        <input type="text"
        className='form-control form-control-lg'
        placeholder='Enter your Website Name'
        name="website"
        value={website}
        onChange={(e)=> onInputChange(e)}

        />
    </div>
    <button className="btn btn-warning btn-lg btn-block mt-4">Update User</button>
    </form>

    </div>
         
    </div>
  )
}

export default EditUser