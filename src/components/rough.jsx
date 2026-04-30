import React from 'react';
import '../css/NavBar.css'; 
import '../css/header-wrapper.css'

const navItems = ['HOME', 'ABOUT US', 'JOURNALS', 'eBOOKS', 'CONFERENCES', 'FAQ\'s', 'MEMBERSHIP', 'INDEXING', 'CONTACT US'];

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark header-wrapper rounded" style={{ 
      backgroundColor: '#0070c0',
      position: 'relative',
      zIndex: 10,
      marginBottom: '-20px', // This creates the overlap
      borderRadius: '8px'    // Your default radius
    }}>
      <div className="container-fluid px-4">
        
        {/* Pushing the Toggler to the RIGHT side */}
        <button 
          className="navbar-toggler ms-auto" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

       <div className="collapse navbar-collapse" id="navbarNav">
  {/* Added 'w-100' to stretch, 'justify-content-center' to center */}
         <ul className="navbar-nav w-100 justify-content-center">
           {navItems.map((item) => (
          <li className="nav-item" key={item}>
           <a 
             className="nav-link text-white fw-bold custom-nav-link" 
             href="#" 
            >
              {item}
           </a>
          </li>
         ))}
         </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;