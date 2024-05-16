import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Upload = () => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const [details,setDetails] = useState({title: "",description: "",type:"",medium: "",price: "",stock: "",date: "",discount: "",rating: "",image: ""})
  
  const handleSubmit= async()=>{
    
   const res = await axios.post("http://localhost:4000/upload",{
    title: details.title,
    description: details.description,
    medium: details.medium,
    price: details.price,
    stock: details.stock,
    date: details.date,
    discount: details.discount,
    type: details.type,
    rating: details.rating,
    image: details.image
   })
  console.log(res.data.message)
   if(res.data.message==="added successfully"){
    window.alert("Added successfully")
    

   }else{
    window.alert("Artpiece already exists in database")
   }
  }

  const handleImageClick = (path) => {
    navigate(path);
  };
  const handleChange=(e)=>{
    setDetails({...details,[e.target.name]: e.target.value})
}


const handleImage=(e)=>{
    setDetails({...details,[e.target.name]: e.target.files[0]})
    const imageUrl = URL.createObjectURL(e.target.files[0]);
      setImagePreview(imageUrl);
}
  return (
    <div>
     <h1>Please enter the details</h1>

     <div>Title : <input onChange={handleChange} type="text" name="title"/></div>
     <div>Description : <input onChange={handleChange} type="text" name="description"/></div>
     <div>Medium : <input type="text" name="medium" onChange={handleChange}/></div>
     <div>Price in rupees: <input type="number" name="price" onChange={handleChange}/></div>
     <div>Stock: <input type="number" name="stock" onChange={handleChange}/></div>
     <div>Created At in DD-MM-YYYY: <input type="text" onChange={handleChange} name="date"/></div>
     <div>Discount: <input type="number" onChange={handleChange} name="discount"/></div>
     <div>Type : <input onChange={handleChange} type="text" name="type"/></div>
     <div>Rating: <input type="number" onChange={handleChange} name="rating"/></div>
     <div>File: <input type="file" onChange={handleImage} name="image"/></div><image src={imagePreview} width={"100%"}></image>
      <button onClick={() => handleSubmit()} style={{ cursor: 'pointer' }}>
        Submit
      </button>

      <button onClick={()=>{
        navigate("/")
      }} style={{ cursor: 'pointer' }}>
        Logout
      </button>
     </div>
  );
};

export default Upload;