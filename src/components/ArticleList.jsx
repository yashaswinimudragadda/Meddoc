import React from 'react';
import '../css/ArticleList.css';

const articles = [
  { id: 1, title: "Effects of SGLT2 Inhibitor on Neurohormonal Activity and Electrolyte Management in an Elderly Patient with Type 2 Diabetes Mellitus and Acute Heart Failure:A Case Report", author: "Hajime Kataoka", journal: "ANNALS OF CARDIOLOGY AND VASULAR MEDICINE(ISSN:2639-4383)" },
  { id: 2, title: "A Review of the Gastrointestinal Effects Associated with COVID-19 Infecctions", author: "Bailey Reid; Allyson L Spence*;Cassandra Stroup", journal: "ANNALS OF GASTROENTEROLOGY AND THE DIGESTIVE SYSTEM (ISSN: 2637-4501)" },
  { id: 3, title: "Nanoparticles Mitigate Retinal Pigment Epithelium (RPE) Death-Using APRE19 Cell Model",author:"Eric Dahl*;Nikolaos E Efstathiou;Amit K Roy", journal: "JOURNAL OF NANOMEDICINE(ISSN:2578-8760)" }
];

const ArticleList = () => {
  return (
    <div className="text-white">
      <h2 className="mb-4 fw-bold">ARTICLES</h2>
      {articles.map((art,index) => (
        <div key={art.id} className="mb-4 ">
          <h5 className="fw-bold title">{art.title}</h5>
          <p className="fst-italic small author">{art.author}</p>
          <div className="journal-badge" >
            {art.journal}
          </div>
          {index< articles.length - 1 && <span className="divider"></span>}
        </div>
      ))}
    </div>
  );
};

export default ArticleList;