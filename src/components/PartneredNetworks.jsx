import React from 'react';
import { motion } from 'framer-motion';

const networks = [
  { title: "Cancer Science", url: "https://cancerscience.net" },
  { title: "Vaccine Studies", url: "https://vaccine-studies.com" },
  { title: "Food & Nutrition", url: "https://food-nutrition.blog" },
  { title: "Nursing Science", url: "https://nursing-science.com" },
  { title: "Public Health", url: "https://public-health.blog" },
  { title: "The Pharma", url: "https://thepharma.net" },
  { title: "Infectious Disease", url: "https://infect.blog" },
  { title: "Neurocare", url: "https://neurocare.blog" },
  // Add all your remaining links here...
];

const PartneredNetworks = () => {
  return (
    <section className="py-5 bg-white overflow-hidden">
      <h4 className="text-center fw-bold mb-4">Partnered Content Networks</h4>
      
      <div className="marquee-container">
        <motion.div 
          className="d-flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {/* Double the array to create a seamless infinite loop */}
          {[...networks, ...networks].map((item, index) => (
            <a 
              key={index} 
              href={item.url} 
              target="_blank" 
              rel="noreferrer"
              className="btn btn-outline-primary mx-3 text-nowrap"
            >
              {item.title}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartneredNetworks;