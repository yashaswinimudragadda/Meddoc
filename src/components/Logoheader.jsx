import  { useState, useEffect } from 'react';
import '../css/LogoHeader.css';
import '../css/header-wrapper.css'

const LogoHeader = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

useEffect(() => {
 // 1. Create a function to update state
 const handleResize = () => setWindowWidth(window.innerWidth);

 // 2. Add the listener
 window.addEventListener('resize', handleResize);
handleResize();

 // 4. Cleanup
 return () => window.removeEventListener('resize', handleResize);
}, []); // Empty array is correct here 


  const isTablet = windowWidth <= 768;

  return (
    <div  className="header-wrapper" style={{ ...styles.container, padding: isTablet ? '10px 20px' : '20px 40px' }}>
      {/* Logo */}
      <img src="./public/images/logo.png" alt="MedDocs Logo" style={styles.logo} />

      {/* Right Side: Contact Info */}
      <div className="main-header-container">
        <div style={styles.contactGroup}>
        {/* WhatsApp */}
        <div style={styles.infoBox}>
          <img src="./public/images/wt.png" alt="WhatsApp" style={styles.icon} />
          <div>
            <div style={styles.label}>Whatsapp Number</div>
            <div style={styles.value}>+1 (608) 718-6264</div>
          </div>
        </div>

        {/* Email */}
        <div style={styles.infoBox}>
          <img src="./public/images/email.png" alt="Email" style={styles.icon} />
          <div>
            <div style={styles.label}>EMAIL</div>
            <div style={styles.value}>support@meddocsonline.org</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  logo: { height: '100px', width: 'auto' },
  contactGroup: { display: 'flex', gap: '30px' },
  infoBox: { display: 'flex', alignItems: 'center', gap: '10px' },
  icon: { width: '35px', height: '35px' },
  label: { fontSize: '11px', color: '#666', fontWeight: 'bold' },
  value: { fontSize: '13px', color: '#000', fontWeight: '600' }
};

export default LogoHeader;