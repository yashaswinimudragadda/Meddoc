import React from 'react';
import '../css/SidebarSlider.css'; // Ensure this path is correct

const SidebarSlider = () => {
  const sliderItems = [
    { id: 1, src: "./public/images/md-conferences.jpg", title: "MEDDOCS PUBLISHERS - CONFERENCES" },
    { id: 2, src: "./public/images/md-journals.jpg", title: "MEDDOCS PUBLISHERS - JOURNALS" },
    { id: 3, src: "./public/images/ebooks-banner.jpg", title: "MEDDOCS PUBLISHERS - EBOOKS" },
  ];

  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      
      {/* 1. The Three Dots (Indicators) */}
      <div className="carousel-indicators">
        {sliderItems.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* 2. The Slides */}
      <div className="carousel-inner">
        {sliderItems.map((item, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={item.id}>
            <img src={item.src} className="d-block w-100" alt={item.title} style={{ borderRadius: '4px' }} />
            <div className="carousel-caption d-block" style={{ backgroundColor: 'rgba(0,0,0,0.6)', bottom: '0', left: '0', right: '0', padding: '10px' }}>
              <h6 className="m-0 title-img">{item.title}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarSlider;