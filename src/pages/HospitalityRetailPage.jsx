// src/pages/HospitalityRetailPage.jsx
import hospitalityCover from "../assets/images/hospitality/hospitality-cover.webp";

function HospitalityRetailPage() {
  return (
    <section className="page-section gallery-page">
      <h1 className="page-title">Hospitality &amp; Retail</h1>
      <p className="page-subtitle">
        Images crafted for hotels, restaurants, and retail spaces with a warm,
        editorial focus on interiors, atmosphere, and details.
      </p>

      <div className="gallery-grid">
        <div className="gallery-item">
          <img
            src={hospitalityCover}
            alt="Hospitality interior"
            className="gallery-image"
          />
        </div>
      </div>
    </section>
  );
}

export default HospitalityRetailPage;
