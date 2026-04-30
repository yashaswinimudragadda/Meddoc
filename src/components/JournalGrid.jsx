import '../css/JournalGrid.css' 


const JournalGrid = () => {
  const journals = [
    {icon:"/images/journals/biotechnology.png",hover:"/images/journals/biotechnology-hover.png", title: "Biotechnology", desc: "The term biotechnology is said as a technological application..." },
    {icon:"/images/journals/clinical-nutrition.png",hover:"/images/journals/clinical-nutrition-hover.png", title: "Clinical Nutrition", desc: "Clinical nutrition simply aims to maintain healthy energy balance..." },
    {icon:"/images/journals/addiction.png",hover:"/images/journals/addiction-hover.png", title: "Addiction and Recovery", desc: "Addiction is one of the major issues across the globe..." },
    {icon:"/images/journals/community.png",hover:"/images/journals/community-hover.png", title: "Community Medicine", desc: "Community medicine is a discipline of medicine which deals..." },
    {icon:"/images/journals/gastroenterology.png",hover:"/images/journals/gastroenterology-hover.png", title: "Gastroenterology", desc: "Gastroenterology majorly focuses on the digestive system..." },
    {icon:"/images/journals/neurology.png",hover:"/images/journals/neurology-hover.png", title: "Neurology", desc: "Neurology is a medical discipline which teaches about..." }
  ];

  return (
    <section className="container-fluid py-5" style={{gap:'2px', backgroundColor: '#f8f9fa' }}>
      <div className="row g-0"> {/* g-0 removes gaps between columns */}
        
        {/* Left Info Panel */}
        <div className="col-12 col-lg-4 p-5 text-white" style={{ background:'url("/images/j.jpg") center/cover' }}>
          <h2 className="fw-bold mb-4" style={{fontFamily: 'Roboto Slab', fontSize: 'clamp(20px, 3vw, 32px)' }}>
            <span className="fw-normal">Open Access Peer</span> Reviewed Journals
          </h2>
          <span className="divider"></span>
          <p className="mb-4 journal-description  " style={{ fontSize: 'clamp(14px, 1.5vw, 16px)' }}>
            We are dedicated to publish informative journals covering various areas of science, medicine and latest technology. We follow open access policies. All our published journals are peer-reviewed academic and scholarly articles which are based on the various novel achievements and research findings in various fields. These journals are indeed a great medium for open access publication that majorly contains novel research findings that benefits the large scientific communities across the globe. The articles which are published...
          </p>
         <button className="btn btn-outline-light fst-italic">View All Journals</button> 
        </div>

        {/* Right Grid Panel */}
        <div className="col-12 col-lg-8">
          <div className="row g-0">
            {journals.map((item, index) => (
              <div 
                key={index} 
                // Added 'journal-card' class here for CSS targeting
                className="col-12 col-md-4 border p-4 text-center d-flex flex-column align-items-center grid-border journal-card"
              >
                <div className="icon-wrapper mb-3">
                  {/* Ensure 'item.hover' matches your data key */}
                  <img src={item.icon} alt={item.title} className="icon-normal" />
                  <img src={item.hover} alt={item.title} className="icon-hover" />
                </div>
                <h5 className="fw-bold" style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}>{item.title}</h5>
                <p className="text-secondary" style={{ fontSize: 'clamp(12px, 1.2vw, 14px)' }}>{item.desc}</p>
                <button className="btn btn-outline-primary btn-sm mt-auto">Read More</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalGrid;