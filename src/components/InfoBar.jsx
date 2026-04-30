const InfoBar = () => {
  return (
    <section className="container-fluid p-4" style={{ backgroundColor: '#0084e6', color: '#fff' }}>
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-between px-4" 
           style={{ fontSize: 'clamp(14px, 2.5vw, 18px)' }}>
        
        {/* Text Content */}
        <div className="mb-3 mb-md-0 me-md-4">
          <h3 className="fw-bold m-0" style={{ fontSize: 'clamp(18px, 4vw, 24px)' }}>
            MEDDOCS PUBLISHERS
          </h3>
          <p className="m-0" style={{ maxWidth: '800px' ,fontSize: 'clamp(10px, 2.5vw, 18px)'}}>
            The journals, e-books and conferences are being published and organized in order to spread the information on the latest technological and scientific researches among the core group with the aim of disseminating information for the betterment of mankind.
          </p>
        </div>

        {/* More Info Button */}
        <button className="btn btn-outline-light fw-bold" 
                style={{ fontSize: 'clamp(10px, 1vw, 16px)', padding: '8px 24px' }}>
          MORE INFO
        </button>
      </div>
    </section>
  );
};

export default InfoBar;