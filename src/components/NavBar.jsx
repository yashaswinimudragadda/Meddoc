import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/NavBar.css'; 
import '../css/header-wrapper.css';

gsap.registerPlugin(ScrollTrigger);

const navItems = ['HOME', 'ABOUT US', 'JOURNALS', 'eBOOKS', 'CONFERENCES', 'FAQ\'s', 'MEMBERSHIP', 'INDEXING', 'CONTACT US'];

const NavBar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    // We still use GSAP ONLY to toggle the visual "sticky-nav" class
    // Bootstrap handles the actual positioning
    const trigger = ScrollTrigger.create({
      trigger: "body", // Start tracking from the very top of the page
      start: "top=-100 top", // Trigger after scrolling 100px
      onEnter: () => navRef.current.classList.add("sticky-nav"),
      onLeaveBack: () => navRef.current.classList.remove("sticky-nav"),
    });

    return () => trigger.kill();
  }, []);

  return (
    <>
    <nav ref={navRef} className="navbar navbar-expand-lg navbar-dark header-wrapper sticky-top">
       <div className="container-fluid px-4">
        <button 
          className="navbar-toggler ms-auto" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 justify-content-center">
            {navItems.map((item) => (
              <li className="nav-item" key={item}>
                <a className="nav-link text-white fw-bold custom-nav-link" href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    
    </>
  );
};

export default NavBar;