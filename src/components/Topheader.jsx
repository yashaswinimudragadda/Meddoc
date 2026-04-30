import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import '../css/header-wrapper.css'

const Topheader = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);


useEffect(() => {
 // 1. Create a function to update state
 const handleResize = () => setWindowWidth(window.innerWidth);

 // 2. Add the listener
 window.addEventListener('resize', handleResize);
handleResize();

 // 4. Cleanup
 return () => window.removeEventListener('resize', handleResize);
}, []); // Empty array is correct here 


  

  // Adjust font size dynamically for tablet view (e.g., 768px and below)
  const isTablet = windowWidth <= 768;
  const responsiveStyles = {
    ...styles,
    link: { ...styles.link, fontSize: isTablet ? '10px' : '12px' },
    leftSection: { ...styles.leftSection, fontSize: isTablet ? '11px' : '13px' }
  };

  return (
    <>
    <div  className="main-header-container header-wrapper"style={responsiveStyles.topBar}>
      <div style={responsiveStyles.leftSection}>Welcome to MedDocs Publishers</div>
      
     <div style={styles.rightSection}>
        <div style={styles.navLinks}>
          {['HOME', 'JOURNALS', 'eBOOKS', 'CONFERENCES'].map((link) => (
            <a 
              key={link} 
              href="#" 
              style={{
                ...styles.link, 
                fontSize: isTablet ? '10px' : '12px',
                color: hoveredLink === link ? '#007bff' : '#666' // Blue on hover
              }}
              onMouseEnter={() => setHoveredLink(link)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link}
            </a>
          ))}
        </div>

        <div style={styles.socialGroup}>
          {[
            { id: 'fb',page:"https://www.facebook.com/MedDocsPublishers/" ,icon: <FaFacebookF size={14} /> },
            { id: 'tw',page: "https://twitter.com/MedDocsOnline", icon: <FaTwitter size={14} /> },
            { id: 'gp',page: "https://plus.google.com/u/0/104451341523748356714", icon: <span style={styles.gPlus}>G+</span> },
            { id: 'in',page:"#", icon: <FaLinkedinIn size={14} />, last: true }
          ].map((item) => (
            <a 
              key={item.id} 
              href={item.page}
              target="_blank" 
              style={{
                ...styles.iconBox,
                borderRight: item.last ?   'none':'1px solid #e5e7eb',
                backgroundColor: hoveredIcon === item.id ? '#f9f9f9' : 'transparent'
              }}
              onMouseEnter={() => setHoveredIcon(item.id)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

// ... keep your existing 'styles' object here
const styles = {
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '40px',
    padding: '0 40px',
    borderBottom: '1px solid #e5e7eb',
    fontFamily: 'Arial, sans-serif',
    color: '#666',
  },
  leftSection: { fontSize: '13px' },
  rightSection: { display: 'flex', alignItems: 'center', height: '100%' },
  navLinks: { display: 'flex', gap: '20px', marginRight: '20px' },
  socialGroup: { display: 'flex', height: '100%' },
  gPlus: { fontSize: '12px', fontWeight: 'bold', color: '#666' },
  link: { 
    textDecoration: 'none', 
    fontWeight: 'bold',
    transition: 'color 0.3s ease' 
  },
  iconBox: {
    width: '40px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeft: '1px solid #e5e7eb',
    textDecoration: 'none',
    color: '#999',
    transition: 'background-color 0.3s ease'
  },
};

export default Topheader;