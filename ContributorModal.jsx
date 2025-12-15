import React from 'react';

const ContributorModal = ({ show, contributor, onClose }) => {
  if (!show || !contributor) return null; // Render nothing if not visible or no contributor

  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content contributor-modal p-4 text-center">
            <img src={contributor.img} className="modal-profile-img" alt={contributor.name} />
            <h3>{contributor.name}</h3>
            <p>{contributor.role}</p>
            <p>{contributor.desc}</p>
            <button className="btn btn-outline-secondary mt-3" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContributorModal;