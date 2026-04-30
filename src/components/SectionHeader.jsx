const SectionHeader = ({ label, title, linkText }) => {
  return (
    <div className="Textcontainer text-center text-lg-start d-flex flex-column align-items-center align-items-lg-start mb-4">
      {/* Label */}
      <h6 className="text-primary fw-bold" style={{ fontSize: 'clamp(12px, 1.5vw, 16px)' }}>
        {label}
      </h6>
      
      {/* Title and Link Row */}
      <div className="d-flex align-items-baseline gap-2 mb-2">
        <h1 className="fw-bold m-0" style={{ fontSize: 'clamp(18px, 2vw, 30px)' }}>
          {title}
        </h1>
        <span className="fw-normal" style={{ fontSize: 'clamp(14px, 1.5vw, 18px)' }}>
          / {linkText}
        </span>
      </div>
 
      {/* Divider */}
      <div className="bg-primary" style={{ width: '60px', height: '4px' }}></div>
    </div>
  );
};
export default SectionHeader;