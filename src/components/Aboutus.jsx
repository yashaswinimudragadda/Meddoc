const AboutUs = () => {
  return (
    <section className="container-fluid py-5 px-4">
      <div className="row align-items-center">
        
        {/* Left Column: Text Content */}
        <div className="col-lg-6 mb-4 mb-lg-0 pe-lg-5 Textcontainer text-center text-lg-start d-flex flex-column align-items-center align-items-lg-start">
          <h6 className="text-primary fw-bold" style={{ fontSize: 'clamp(12px, 1.5vw, 16px)' }}>
            WELCOME TO MEDDOCS
          </h6>
          <h1 className="fw-bold mb-3" style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}>
            ABOUT US
          </h1>
  
          {/* Divider centers itself automatically due to parent flex properties */}
          <div className="bg-primary mb-4" style={{ width: '60px', height: '4px' }}></div>
  
          <p className="text-secondary mb-4" style={{ fontSize: 'clamp(14px, 0.8vw, 18px)', lineHeight: '1.6' }}>
MedDocs Publishers is a very well-dedicated in publishing various informative medical journals which acts as a powerhouse to bring the physicians and the entire medical fraternity the best research with latest discovered key information in a completely understandable and clinically useful format. This is certainly a career companion for all physicians and medical researchers. The practicing physicians can be well informed about the various new developments in the field which is very necessary to treat patients in the best possible way.

          </p>
  
          <button className="btn btn-primary px-4 py-2" style={{ fontSize: 'clamp(14px, 1.5vw, 16px)' }}>
            READ MORE
          </button>
        </div>


        {/* Right Column: Single Image */}
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
        <div className="image-container" style={{ width: '100%', maxWidth: '500px' }}>
            <img 
            src="/images/welcome_img.jpg" 
            alt="About MedDocs" 
            className="img-fluid rounded shadow-sm" 
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
            />
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutUs;