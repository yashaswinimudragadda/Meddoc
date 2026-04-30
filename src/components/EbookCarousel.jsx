import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SectionHeader from './SectionHeader';

const EbookCarousel = () => {
  const books = [
    { id: 1, title: "PHARMACEUTICAL CHEMISTRY", img: "./public/images/books/an-ebook-on-pharmaceutical-chemistry.jpg" },
    { id: 2, title: "VASCULAR DISEASES", img: "./public/images/books/an-ebook-on-vascular-diseases.jpg" },
    { id: 3, title: "NANOTECHNOLOGY", img: "./public/images/books/importance-applications-of-nanotechnology.jpg" },
    { id: 4, title: "MODERN CHEMISTRY", img: "./public/images/books/principles-of-modern-chemistry.jpg" },
    { id: 5, title: "BIOTECHNOLOGY", img: "./public/images/books/recent-trends-in-biotechnology.jpg" },
    { id: 6, title: "MICROBIOLOGY", img: "./public/images/books/research-trends-of-microbiology.jpg" },
    { id:7, title:"Alzheimer's Disease", img:"./public/images/books/alzheimer's-disease-and-treatment.jpg"},
    { id:8, title:"Transfusion Medicine", img:"./public/images/books/transfusion-medicine.jpg"}
  ];

  return (
    <section className="container py-5">
        <div className="row">
         <div className="col-lg-12">
           <SectionHeader 
             label="MEDDOCS" 
             title="E-BOOKS" 
             linkText="VIEW ALL E-BOOKS" 
           />
         </div>
       </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1} // Default for mobile
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
           <div className="book-card" style={{ position: 'relative', overflow: 'hidden' }}>
             {/* Image */}
             <img src={book.img} alt={book.title} className="img-fluid rounded shadow-sm" />
           </div>
         </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default EbookCarousel;