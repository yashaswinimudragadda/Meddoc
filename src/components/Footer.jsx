import '../css/Footer.css'
 
const Footer = () => {
    
  return (
    <footer className="container-fluid py-5 px-4 bg-light align-items-center text-center">
      <div className="row">
        
        {/* Logo and Copyright */}
        <div className="col-12 col-md-3 mb-4 align-items-center text-center">
          <img src="./public/images/logo.png" alt="MedDocs Logo" className="img-fluid mb-3" style={{ maxWidth: '200px' }} />
          <p className="text-secondary " style={{ textAligin:'center',fontSize: 'clamp(12px, 1.2vw, 14px)' }}>
            Copyright © 2018-2019 Meddocs All Rights Reserved.
          </p>
        </div>

        {/* Contact Us */}
        <div className="col-12 col-md-3 mb-4">
          <h5 className="fw-bold mb-3" style={{ fontSize: 'clamp(16px, 1.8vw, 18px)' }}>CONTACT US</h5>
          <ul className="list-unstyled text-secondary" style={{ fontSize: 'clamp(12px, 1.2vw, 14px)' }}>
            <li className="mb-2 fw-bold">MedDocs Publishers LLC</li>
            <li className="mb-2">Suite 200-A, 401 Ryland St, Reno, NV 89502 <br/> United States</li>
            <li className="mb-2">support@meddocsonline.org</li>
            <li>www.meddocsonline.org</li>
          </ul>
        </div>

        {/* Quick Links Column */}
<div className="col-12 col-md-3 mb-4">
  <h5 className="fw-bold mb-3" style={{ fontSize: 'clamp(16px, 1.8vw, 18px)' }}>QUICK LINKS</h5>
  <ul className="list-unstyled text-secondary" style={{ fontSize: 'clamp(12px, 1.2vw, 14px)' }}>
    {['Home', 'About', 'Journals', 'eBooks', 'Conferences', 'FAQs', 'Membership', 'Contact Us', 'Submit Manuscript', 'Author Guidelines', 'Join As A Reviewer', 'Open Access', 'Peer Review', 'Plagiarism', 'Publication Fee'].map(link => (
      <li key={link} className="mb-1">
        <a href="#" className="footer-link text-decoration-none text-secondary">{link}</a>
      </li>
    ))}
  </ul>
</div>

{/* Main Links & Socials Column */}
<div className="col-12 col-md-3 mb-4">
  <h5 className="fw-bold mb-3" style={{ fontSize: 'clamp(16px, 1.8vw, 18px)' }}>MAIN LINKS</h5>
  <ul className="list-unstyled text-secondary mb-4" style={{ fontSize: 'clamp(12px, 1.2vw, 14px)' }}>
    {['Journals', 'Conferences', 'eBooks'].map(link => (
        <li key={link}><a href="#" className="footer-link text-decoration-none text-secondary">{link}</a></li>
    ))}
  </ul>
  <h5 className="fw-bold mb-3" style={{ fontSize: 'clamp(16px, 1.8vw, 18px)' }}>FOLLOW US</h5>
  <ul className="list-unstyled text-secondary" style={{ fontSize: 'clamp(12px, 1.2vw, 14px)' }}>
    {['Face Book', 'Twitter', 'Google +'].map(link => (
        <li key={link}><a href="#" className="footer-link text-decoration-none text-secondary">{link}</a></li>
    ))}
  </ul>
</div>
      </div>
    </footer>
  );
};

export default Footer;