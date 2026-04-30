const Conferences = () => {
  return (
    <section className="container-fluid py-5 px-4">
      <div className="row align-items-center">
        
        {/* Left: Image */}
        <div className="col-lg-6 mb-4 mb-lg-0 order-1 order-lg-1">
          <img 
            src="/images/j1.png" 
            alt="Conference" 
            className="img-fluid rounded shadow" 
            style={{ width: '100%', height: 'auto' }} 
          />
        </div>

        {/* Right: Text Content */}
        <div className="col-lg-6 ps-lg-5 order-2 order-lg-2 text-center text-lg-start">
          <h6 className="text-primary fw-bold" style={{ fontSize: 'clamp(12px, 1.5vw, 16px)' }}>
            MEDDOCS
          </h6>
          <h1 className="fw-bold mb-3" style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}>
            CONFERENCES
          </h1>
          <div className="bg-primary mb-4 mx-auto mx-lg-0" style={{ width: '60px', height: '4px' }}></div>
          
          <p className="text-secondary mb-4" style={{ fontSize: 'clamp(14px, 1.8vw, 18px)', lineHeight: '1.6' }}>
            We have a wing which is dedicated to organize international conferences in various parts of the world. It provides a great platform for face to face discussions on various latest advancements. The organizing committee leads the conference in the most fruitful manner. Proper scientific agenda is being fixed for each conference while organizing.<br/><br/>
            These conferences are being organized with the necessary cooperation of the learned societies, the industry leading companies and various scholarly associations which also provides an active forum to the various scientific communities in order to share the newly discovered ideas and knowledge that ultimately works for the betterment of the society and humanity as a whole.
          </p>
          
          <button className="btn btn-primary px-4 py-2" style={{ fontSize: 'clamp(14px, 1.5vw, 16px)' }}>
            READ MORE
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default Conferences;