const ContactSection = () => {
  return (
    <section className="container-fluid py-5 px-4" style={{ backgroundColor: '#0084e6', color: '#fff' }}>
      <div className="row align-items-center justify-content-between">
        
        {/* Text Content */}
        <div className="col-12 col-lg-8 mb-4 mb-lg-0">
          <h2 className="fw-bold mb-3" style={{ fontSize: 'clamp(12px, 2vw, 18px)' }}>
            MEDDOCS PUBLISHERS
          </h2>
          <p className="m-0" style={{ fontSize: 'clamp(12px, 1.5vw, 14px)', lineHeight: '1.5' }}>
We always work towards offering the best to you. For any queries, please feel free to get in touch with us. Also you may post your valuable feedback after reading our journals, ebooks and after visiting our conferences.

          </p>
        </div>

        {/* Action Button */}
        <div className="col-12 col-lg-3 text-lg-end">
          <button className="btn btn-light fw-bold text-primary px-4 py-2" 
                  style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>
            CONTACT US
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default ContactSection;