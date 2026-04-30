import React from 'react';
import SidebarSlider from './SidebarSlider';
import ArticleList from './ArticleList';
import InfoBar from './InfoBar';

const HeroSection = () => {
  return (
    <>
    <section className="container-fluid py-4" style={{ backgroundColor: '#0a3d62' }}>
      {/* Added 'text-center' to center text on all screens */}
      {/* 'text-lg-start' reverts the text to left-aligned on large screens (>= 992px) */}
      <div className="row px-4 text-center text-lg-start"style={{paddingTop: '80px'}}>
        
        {/* Left Column: Sidebar Slider */}
        <div className="col-lg-4 col-md-12 mb-4 d-flex justify-content-center">
          <SidebarSlider />
        </div>
        
        {/* Right Column: Articles */}
        <div className="col-lg-8 col-md-12">
          <ArticleList />
        </div> 
      </div>
    </section>
    <InfoBar/>
    </>
  );
};

export default HeroSection;