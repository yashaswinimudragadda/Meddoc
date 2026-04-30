import React from 'react';
import '../css/Divider.css'; // Assuming you keep your styles here

const Divider = ({ thickness = "1px", color = "#dee2e6", margin = "20px 0" }) => {
  return (
    <div 
      className="custom-divider" 
      style={{ 
        height: thickness, 
        backgroundColor: color, 
        margin: margin 
      }} 
    />
  );
};

export default Divider;