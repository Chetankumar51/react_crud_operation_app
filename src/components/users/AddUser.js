import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const AddUser = () => {
    let history = useHistory()
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

    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:3003/users", user) 
        history.push("/")
    }


  return (
      <div className='container' >
          <div className='w-75 mx-auto shadow p-5' >
              <h2 className='text-center mb-4' >Add A User</h2>

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
    <button className="btn btn-primary btn-lg btn-block mt-4">Add User</button>
    </form>

    </div>
         
    </div>
  )
}

export default AddUser