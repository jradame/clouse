import hospitalityCover from "../assets/images/hospitality/hospitality-cover.webp";

function HospitalityRetailPage() {
  return (
    <section className="page-section">
      <h1 className="page-title">Hospitality &amp; Retail</h1>
      <p className="page-subtitle">
        Visual stories for hotels, restaurants, and retail environments.
      </p>

      <div className="gallery-grid">
        <div className="gallery-item">
          <img
            src={hospitalityCover}
            alt="Hospitality scene"
            className="gallery-image"
          />
        </div>
      </div>
    </section>
  );
}

export default HospitalityRetailPage;
