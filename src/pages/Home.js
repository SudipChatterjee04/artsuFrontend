import React from 'react';
import Carousel from '../components/Carousel';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleImageClick = (path) => {
    navigate(path);
  };

  return (
    <div>
     <h1>Welcome to My Art Portfolio</h1>
      <div onClick={() => handleImageClick('/about')} style={{ cursor: 'pointer' }}>
        <Carousel />
      </div>
     </div>
  );
};

export default Home;