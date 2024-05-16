import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [details,setDetails] = useState({name: "",password: ""})

  const handlechange=(e)=>{
      setDetails({...details,[e.target.name]: e.target.value})
  }
  const handleImageClick = async () => {
    const res = await axios.get(`http://localhost:4000/admins?name=${details.name}&password=${details.password}`);
    if(res.data.message==="No such user"){
        window.alert("No such user")
    }else{
        navigate("/upload")
    }

  };

  return (
    <div>
     <h1>Verify that you are an admin</h1>
     <div>Name : <input onChange={handlechange} name="name" type="text"/></div>
     <div>Password : <input onChange={handlechange} name="password" type="password"/></div>
     <button onClick={() => handleImageClick()} style={{ cursor: 'pointer' }}>
        Submit
      </button>
     </div>
  );
};

export default Login;