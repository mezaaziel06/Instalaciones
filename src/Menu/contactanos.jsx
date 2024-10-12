import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import elevador from './../assets/images/elevador.jpg';

const Contactanos = () => {
    return (
      <div className="relative h-screen w-full">
        <img src={elevador} alt="elevador" className="max w-full h-full" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-white text-3xl font-bold flex items-center space-x-2">
            <FaPhoneAlt />
            <span>9983663869</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contactanos;